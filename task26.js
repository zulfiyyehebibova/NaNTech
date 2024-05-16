


var baza = [
    {
        sekil:"https://turbo.azstatic.com/uploads/f460x343/2023%2F12%2F13%2F13%2F27%2F26%2Fd70dce0d-8707-4d22-bf6e-307e9948abec%2F3633_xmcdmjAPrsfpYgmGgUBY7Q.jpg",
        sekil2:"https://turbo.azstatic.com/uploads/full/2023%2F12%2F13%2F13%2F27%2F26%2Fd70dce0d-8707-4d22-bf6e-307e9948abec%2F3633_xmcdmjAPrsfpYgmGgUBY7Q.jpg",
        yazi:"80240$",
        aciqlama:"Mercedes V 220"
    },
    {
        sekil:"https://turbo.azstatic.com/uploads/f460x343/2024%2F03%2F18%2F16%2F16%2F43%2F58211679-54c4-439e-b5dc-2bdf5c82fa27%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg",
        yazi:"69500$",
        aciqlama:"Mercedes GLE 450"
    },
    {
        sekil:"https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F04%2F11%2F38%2F09%2Fb8cd65ac-4bb3-4dc8-b031-bf46add34608%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg",
        yazi:"30500$",
        aciqlama:"Toyota Camry"
    },
    {
        sekil:"https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F11%2F15%2F09%2F23%2F81afc636-62b1-4a26-bd0e-9a7a8a848e14%2F3634_3UzoizdOzi0Jqh7Qz__zOQ.jpg",
        yazi:"85436$",
        aciqlama:"Mercedes V 250"
    }
]


for (let i = 0; i < baza.length; i++) {
    document.querySelector(".divler").innerHTML += `
    <div class="div1" onclick = "bir(${i})">
            <img src="${baza[i].sekil}" alt="">
            <h1>${baza[i].yazi}</h1>
            <p>${baza[i].aciqlama}</p>
    </div>
    `
}

function bir(i) {
    document.querySelector(".div2").style.display = "block"
    document.querySelector(".div2").innerHTML += `
    <img src="${baza[i].sekil}" alt="" class="yuxarisekil">
    <div class="div3">
    <img src="${baza[i].sekil}" alt="">
    <img src="${baza[i].sekil2}" alt="">
    </div>
    `
    
    document.querySelector(".div3 img").forEach(x => {
        x.addEventListener("click",function () {
            document.querySelector(".yuxarisekil").src = x.src
        })
    });
}
    
    

    