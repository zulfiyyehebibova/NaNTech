


let div1 = document.querySelector(".div1");

document.querySelector(".bg").addEventListener("keyup",function () {
    div1.style.backgroundColor = document.querySelector(".bg").value
});
document.querySelector(".width").addEventListener("keyup",function () {
    div1.style.width = document.querySelector(".width").value + "px";
});
document.querySelector(".height").addEventListener("keyup",function () {
    div1.style.height = document.querySelector(".height").value + "px";
});
document.querySelector(".border-color").addEventListener("keyup",function () {
    div1.style.borderColor = document.querySelector(".border-color").value;
});