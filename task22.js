




document.querySelectorAll(".ilk img").forEach(x => {
    x.addEventListener("click",function () {
        document.querySelector(".div1 img").src = x.src 
    })

});

