const qirmizi = document.querySelector(".qirmizi");

let x = 90;
let y = 65;

const step = 20;

function hereketEt(dx, dy) {

  const newX = x + dx;
  const newY = y + dy;

  if (newX < 0 || newX > 180 || newY < 0 || newY > 130) {
    alert("Daha irəli gedə bilməz!");
    return;
  }

  x = newX;
  y = newY;

  qirmizi.style.left = x + "px";
  qirmizi.style.top = y + "px";
}

document.querySelector(".sag").addEventListener("click", () => {
  hereketEt(step, 0);
});

document.querySelector(".sol").addEventListener("click", () => {
  hereketEt(-step, 0);
});

document.querySelector(".yuxari").addEventListener("click", () => {
  hereketEt(0, -step);
});

document.querySelector(".asagi").addEventListener("click", () => {
  hereketEt(0, step);
});

document.querySelector(".sagyuxari").addEventListener("click", () => {
  hereketEt(step, -step);
});

document.querySelector(".sagasagi").addEventListener("click", () => {
  hereketEt(step, step);
});

document.querySelector(".solyuxari").addEventListener("click", () => {
  hereketEt(-step, -step);
});

document.querySelector(".solasagi").addEventListener("click", () => {
  hereketEt(-step, step);
});

document.querySelector(".merkez").addEventListener("click", () => {
  x = 90;
  y = 65;

  qirmizi.style.left = x + "px";
  qirmizi.style.top = y + "px";
});