var second = 0;
var minutes = 0;
var saat = 0;

var a = setInterval(time, 1000);

function time() {
  second++;

  if (second == 60) {
    second = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      saat++;
    }
  }

  if (saat < 10) {
    document.querySelector(".div1").innerText = "0" + saat;
  } else {
    document.querySelector(".div1").innerText = saat;
  }

  if (minutes < 10) {
    document.querySelector(".div2").innerText = "0" + minutes;
  } else {
    document.querySelector(".div2").innerText = minutes;
  }

  if (second < 10) {
    document.querySelector(".div3").innerText = "0" + second;
  } else {
    document.querySelector(".div3").innerText = second;
  }
}
