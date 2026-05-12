let now = new Date();

let second = now.getSeconds();
let minutes = now.getMinutes();
let saat = now.getHours();

const hourBox = document.querySelector(".div1");
const minuteBox = document.querySelector(".div2");
const secondBox = document.querySelector(".div3");

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

function updateClock() {
    second++;

    if (second === 60) {
        second = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            saat++;
        }
    }

    hourBox.innerText = formatTime(saat);
    minuteBox.innerText = formatTime(minutes);
    secondBox.innerText = formatTime(second);
}

setInterval(updateClock, 1000);