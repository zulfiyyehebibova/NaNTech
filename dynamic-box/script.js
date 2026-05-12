const box = document.querySelector(".box");

const bgInput = document.querySelector(".bg");
const widthInput = document.querySelector(".width");
const heightInput = document.querySelector(".height");
const borderInput = document.querySelector(".border-color");

bgInput.addEventListener("keyup", function () {
    box.style.backgroundColor = bgInput.value;
});

widthInput.addEventListener("keyup", function () {
    box.style.width = widthInput.value + "px";
});

heightInput.addEventListener("keyup", function () {
    box.style.height = heightInput.value + "px";
});

borderInput.addEventListener("keyup", function () {
    box.style.borderColor = borderInput.value;
});