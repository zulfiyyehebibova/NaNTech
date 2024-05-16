




   

document.querySelector(".fa-cart-shopping").addEventListener("click",function () {
    document.querySelector(".qara").style.display="block"
})

var baza = [
{
    sekil:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
    ad:"Airpods Pro",
    qiymet:"24900",
    category:"Airpods"
},

{
    sekil:"https://purepng.com/public/uploads/large/apple-watch-pcq.png",
    ad:"Apple Watch",
    qiymet:"40900",
    category:"Apple Watch"
},


{
    sekil:"https://pngimg.com/uploads/macbook/macbook_PNG8.png",
    ad:"Macbook Pro",
    qiymet:"199900",
    category:"Macbook Pro"
},


{
    sekil:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    ad:"iPhone 11 pro",
    qiymet:"106600",
    category:"iPhone 11 pro"
}

]


for (let i = 0; i < baza.length; i++) {
    document.querySelector(".divler").innerHTML += `
    <div class="div1"  cat="${baza[i].category}">
    <div class="nan">
        <i class="fa-brands fa-apple"></i>
        <p class="green">In Stock</p>
    </div>
    <img src="${baza[i].sekil}">
    <div class="ilk">
        <h1>${baza[i].ad}</h1>
        <i class="fa-solid fa-heart"></i>
    </div>
    <p class="qisa">Wireless Noise Cancelling Earphones</p>
    <p>AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy
        mode so much can hear your surroundings.</p>
    <div class="iki">
        <p>${baza[i].qiymet}</p>
        <a href="#" onclick="bir(${i})">Add ></a>
    </div>
</div>
    `
}



function bir(i) {
    document.querySelector(".qara").style.display = "block"
    document.querySelector(".balaca").innerHTML += `
    <div class="divv1">
    <h1>${baza[i].ad}</h1>
    <p>${baza[i].qiymet}</p>
    <img src="${baza[i].sekil}" alt="">
    <i class="fa-solid fa-trash"></i>

    </div>

    `
}


document.querySelectorAll(".fa-heart").forEach(x => {
    x.addEventListener("click",function () {
        x.classList.toggle("reng")

    })
});

document.querySelector("input").addEventListener("keyup",function () {
    var deyer = document.querySelector(".DIV input").value
    document.querySelectorAll(".div1 h1").forEach(x => {
        x.parentElement.parentElement.style.display = "none"
        if (x.innerText.toUpperCase().includes(deyer.toUpperCase())) {
            x.parentElement.parentElement.style.display="block"
        }
    });
})

document.querySelectorAll("button").forEach(x => {
    x.addEventListener("click",function () {
        document.querySelectorAll(".div1").forEach(y=>{
            if (y.getAttribute("cat")==x.getAttribute("class")|| x.getAttribute("class")=="All") {
                y.style.display="block"
            }
            else{
                y.style.display="none"
            }
        })
    })
});