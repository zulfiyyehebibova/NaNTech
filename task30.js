

var birinci;

document.querySelectorAll(".div1 p").forEach(x => {
    x.addEventListener("click",function () {
        document.querySelectorAll("p").forEach(y=>{
            y.style.color="black"
        })
        x.style.color="red"
        birinci=x;
    })
});


document.querySelector(".two").addEventListener("click",function () {
    birinci.style.color="black"
    document.querySelector(".div2").append(birinci)
})

document.querySelectorAll(".div2 p").forEach(x => {
    x.addEventListener("click",function () {
        document.querySelectorAll("p").forEach(y=>{
            y.style.color="black"
        })
        x.style.color="red"
        birinci=x;
    })
});

document.querySelector(".one").addEventListener("click",function () {
    birinci.style.color="black"
    document.querySelector(".div1").append(birinci)
})