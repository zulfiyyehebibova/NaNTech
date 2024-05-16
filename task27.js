



document.querySelector(".fa-eye").addEventListener("click",function () {
    document.querySelector(".fa-eye-slash").style.display = "block"
    document.querySelector(".fa-eye").style.display = "none"
    document.querySelector("input").type = "text"
})

document.querySelector(".fa-eye-slash").addEventListener("click",function () {
    document.querySelector(".fa-eye").style.display = "block"
    document.querySelector(".fa-eye-slash").style.display = "none"
    document.querySelector("input").type = "password"
})
