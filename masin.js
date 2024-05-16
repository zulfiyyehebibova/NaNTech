


var baza=[
    {
        sekil1:"https://turbo.azstatic.com/uploads/f460x343/2024%2F02%2F27%2F17%2F39%2F32%2F19da19bd-a6d5-4811-8c90-031074b63a0d%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg",
        qiymet:"27000 AZN",
        ad:"Ford Transit",
        category:"Ford"
    },
    {
        sekil1:"https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F16%2F12%2F27%2F37%2F5f38a6ef-1467-4ee4-9073-997b6511cc96%2F14231_J-_dQLKSND7AOyYEFIDxaw.jpg",
        qiymet:"10500 AZN",
        ad:"Kia Rio",
        category:"Kia"
    },
    {
        sekil1:"https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F02%2F12%2F38%2F28%2F7c9f9dd0-db0d-4b72-8522-330683ecc739%2F90393_ODR1trMUn1QUOVEF2iZirw.jpg",
        qiymet:"19800 $",
        ad:"BMW 528",
        category:"BMW 528"
    },
    {
        sekil1:"https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F17%2F18%2F25%2F49%2F3f713e7c-c752-4c7c-bd57-f74fcc5a1f80%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
        qiymet:"23800 $",
        ad:"BMW X6",
        category:"BMW X6"
    }
]

for (let i = 0; i < baza.length; i++) {
    $(".divler").append(` 
    <div class="div1" cat="${baza[i].category}">
    <img src="${baza[i].sekil1}" alt="">
    <h1>${baza[i].qiymet}</h1>
    <p>${baza[i].ad}</p>
</div>`)
    
}

    $("button").click(function(){
        var a = $(this).attr("class")
        $(".div1").each(function () {
            if ($(this).attr("cat") == a) {
                 $(this).show()
            }
            else{
                $(this).hide()
            }
        })
    })
