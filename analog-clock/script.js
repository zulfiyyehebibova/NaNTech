const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() + minutes / 60;

    const secondsDeg = seconds * 6;
    const minutesDeg = minutes * 6;
    const hoursDeg = hours * 30;

    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();