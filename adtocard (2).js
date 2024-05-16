let data = [{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcntdBT-YbSRyl1SmCi5QMrt_T4CeHel46GQ&usqp=CAU",
    h3: "Airpods Pro",
    p: "Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",
    price: "1200",
    cat: "Airpods"
},
{
    image: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
    h3: "Apple Watch",
    p: "Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",
    price: "2400",
    cat: "Watch"

},
{
    image: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
    h3: "Macbook Pro",
    p: "Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",
    price: "2700",
    cat: "Macbook"
},
{
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    h3: "Iphone 15 Pro",
    p: "Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",
    price: "3000",
    cat: "Iphone"
},
{
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
    h3: "Ipad Pro",
    p: "Up to 2x more Active Noise Cancellation. Transparency mode to hear the world around you. All-new Adaptive Audio intelligently tailors noise control to your environment. Spatial Audio takes immersion to a remarkably personal level.And a single charge delivers 6 hours of battery life.",
    price: "3200",
    cat: "Ipad"
}

]



for (let i = 0; i < data.length; i++) {
    document.querySelector('.items').innerHTML += `

    <div class="item" cat="${data[i].cat}">
            <div class="icon">
                <i class="fa-brands fa-apple"></i>
                <p>In Stock</p>
            </div>
            <img src=${data[i].image} alt="">
            <div class="itemyazi">
               <div class="name">
                 <h3>${data[i].h3}</h3>
                 <i class="fa-regular fa-heart"></i>
               </div>

                <p>Wireless Noise Cancelling Earphones
                AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy
                mode so much can hear your surroundings.</p>

                <div class="price">
                   <p>${data[i].price}₹</p> 
                   <a href="#" class="add" onclick = "sebeteelave(${i})"> Add</a>
                </div>
            </div>
        </div>
</div>
`}


var total = 0

// sebetiacibbaglama
document.querySelector(".Demo").addEventListener("click", function () {
    document.querySelector(".sebet").classList.add("Open")
})
document.querySelector(".close a").addEventListener("click", function () {
    document.querySelector(".sebet").classList.remove("Open")
})

// favoriekleme
document.querySelectorAll(".fa-heart").forEach(x => {
    x.addEventListener("click", function () {
        x.classList.toggle("red")
        x.classList.toggle("fa-solid")

    })
})
document.querySelector(".fa-heart-circle-plus").addEventListener("click", function () {
    if (document.querySelector(".fa-heart-circle-plus").classList.contains("favorii")) {
        document.querySelectorAll(".item").forEach(p => {
            p.style.display = "block" 
        });
        console.log("yoxdu");
    }
    else {
        document.querySelectorAll(".itemyazi i").forEach(p => {
            p.parentElement.parentElement.parentElement.style.display = "none"
            if (p.classList.contains("red")) {
                p.parentElement.parentElement.parentElement.style.display = "block"
            }
        });
        console.log("var");
    }
    document.querySelector(".fa-heart-circle-plus").classList.toggle("favorii")

});




// sebetiartirma
function sebeteelave(i) {
        document.querySelector('.sifaris span').innerText = document.querySelectorAll(".elave").length + 1
        document.querySelector(".p").style.display = "none"
        document.querySelector(".sebetici").innerHTML += `
        <div class="elave">
            <div class="elave1">
                <img src="${data[i].image}" alt="">
                <p class="isim">${data[i].h3}</p>
                <p class="qiymet">${data[i].price}</p>
                <i class="fa-solid fa-trash " onclick = "delet(this)" ></i>
            </div>
            <hr>
        </div>`


        total+= Number(data[i].price)
        document.querySelector(".total p span").innerText= total
    }
// clear
document.querySelector(".clear").addEventListener("click", function () {
        document.querySelector(".sebetici").innerHTML = `
    <div class="p">
    <p>Looks Like You Haven't Added Any Product In The Cart</p>
    </div>
    `
        document.querySelector('.sifaris span').innerText = document.querySelectorAll(".elave").length
        total= 0
        document.querySelector(".total p span").innerText= total

    })

        function delet(i) {
                i.parentElement.parentElement.remove()
                document.querySelector('.sifaris span').innerText = document.querySelectorAll(".elave").length
                total-= Number(i.parentElement.children[2].innerText)
                document.querySelector(".total p span").innerText= total


                console.log();


                //    document.querySelector(".sifaris span").innerHTML= 
            }

// buttonlar
var deyer;
document.querySelectorAll(".buttonss button").forEach(element => {
    element.addEventListener("click", function () {
        deyer = element.getAttribute("class")
        document.querySelectorAll(".items .item").forEach(div => {
            if (div.getAttribute("cat") == deyer || deyer == "all") {
                div.style.display = "block"


            }
            else {
                div.style.display = "none"
            }

        });
    })

});


document.querySelector(".search").addEventListener("keyup",function () {
    deyer=document.querySelector(".search").value
    document.querySelectorAll(".item").forEach(setir => {
        setir.style.display="none"
        if(setir.innerText.toUpperCase().includes(deyer.toUpperCase()))
        setir.style.display=""
    });
    
})
