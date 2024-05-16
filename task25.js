
var baza = [
    {
        sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
        yazi:"Threads",
        aciqlama:"Illustration",
        yazilar:"1Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
        
    },
    {
        sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
        yazi:"Explore",
        aciqlama:"Graphic Design",
        yazilar:"2Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"

    },
    {
        sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
        yazi:"Finish",
        aciqlama:"Identity",
        yazilar:"3Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
    }


   
]

for (let i = 0; i < baza.length; i++) {
    document.querySelector(".divler").innerHTML += `
    <div class="div1" onclick = "bir(${i})">
            <img src="${baza[i].sekil}" alt="">
            <h1>${baza[i].yazi}</h1>
            <i>${baza[i].aciqlama}</i>
    </div>
    `
}


function bir(i) {
    document.querySelector(".div2").style.display = "block"
    document.querySelector(".div2").innerHTML += `
    <h1>${baza[i].yazi}</h1>
    <i>${baza[i].aciqlama}</i>
    <img src="${baza[i].sekil}" alt="">
    <p>${baza[i].yazilar}<p>

    `
}
