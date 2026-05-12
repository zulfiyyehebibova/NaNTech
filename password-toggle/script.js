// task27.js

const password = document.getElementById("password");

const showIcon = document.getElementById("show");
const hideIcon = document.getElementById("hide");


showIcon.addEventListener("click", function () {

    password.type = "text";

    showIcon.style.display = "none";
    hideIcon.style.display = "block";

});


hideIcon.addEventListener("click", function () {

    password.type = "password";

    hideIcon.style.display = "none";
    showIcon.style.display = "block";

});