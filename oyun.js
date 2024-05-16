// var zaman;

// document.querySelector(".basla").addEventListener("click",function () {
//     zaman=setInterval(goster,1000)
// })

// document.querySelector(".dayan").addEventListener("click",function () {
//     clearInterval(zaman)
// })

// function goster() {
//     document.querySelectorAll(".div1 img").forEach(sekil => {
//         sekil.style.display = "none"
//     });
//     let saat=Math.floor((Math.random() * 9));
//     document.querySelectorAll(".div1 img")[saat].style.display="block"
// }


// var xal = 0;

// document.querySelectorAll(".div1 img").forEach(sekil => {
//     sekil.addEventListener("click",function () {
        
//         xal++
//         document.querySelector(".point").innerText=xal
//     })
// });

// document.querySelectorAll(".div1 img").forEach(sekil => {
//     sekil.addEventListener("click",function () {
//         alert(ela)
//     })
// });





function goster() {
    document.querySelectorAll(".div1 img").forEach(sekil => {
        sekil.innerHTML = ""
    });
    let random=Math.floor((Math.random() * 9));
    document.querySelectorAll(".div1")[random].innerHTML=`
    <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg" alt="">
    `

}

   setInterval(goster,2000)

   document.querySelectorAll(".div1").forEach(sekil => {
    sekil.addEventListener("click",function () {
        if (sekil.innerHTML !="") {
            alert("sekil var")
        }

        else{
            alert("sekil yoxdur")
        }
    })
   })