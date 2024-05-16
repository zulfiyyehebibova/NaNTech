

document.querySelector(".add").addEventListener("click",function () {
    document.querySelector(".qara").style.display = "block"
})
var sira = 1
document.querySelector(".cr").addEventListener("click",function () {
    sira++
    document.querySelector("table").innerHTML += `
    <tr>
    <th>${sira}</th>
    <th>${document.querySelector(".first").value}</th>
    <th>${document.querySelector(".last").value}</th>
    <th>${document.querySelector(".salary").value}</th>
    <th><i id="one" class="fa-solid fa-pen"></i>  
     <i id="two" class="fa-solid fa-trash"></i></th>
    </tr>
    `
    document.querySelectorAll(".fa-trash").forEach(x => {
        x.addEventListener("click",function () {
            x.parentElement.parentElement.remove()
        })
    });
    document.querySelector(".qara").style.display = "none"

    
    
})
document.querySelectorAll(".fa-trash").forEach(x => {
    x.addEventListener("click",function () {
        x.parentElement.parentElement.remove()
    })
});


    document.querySelector(".fa-x").addEventListener("click",function () {
        document.querySelector(".qara").style.display = "none"
    })






