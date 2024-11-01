


var baza = [
    {
        sekil:"https://img.freepik.com/free-photo/side-view-fresh-salad-with-feta-cheese-tomatoes-cucumbers-dried-herbs-with-olive-oil-white-bowl_140725-11935.jpg?t=st=1716297182~exp=1716300782~hmac=34ec3318fcc72e8d4241788f9a4bf66dfdca2e541331fc706d34c7d3390023bb&w=360",
        ad:"Feta Salatı",
        qiymet:"13m",
        category:"salat"
    },
    
    {
      sekil:"https://img.freepik.com/free-photo/side-view-vegetable-salad-with-fruits-strawberries-grapes-plate_141793-6121.jpg?t=st=1716297307~exp=1716300907~hmac=9227d18b6b27d4ebfd677f6821e96ca2491f163db1a8b1e545c086e42404a1c2&w=360",
      ad:"Asiya Salatı",
      qiymet:"11m",
      category:"salat"
    },
    {
        sekil:"https://img.freepik.com/free-photo/side-view-shrimp-caesar-salad-with-cherry-tomatoes-bowl_140725-12044.jpg?t=st=1716297516~exp=1716301116~hmac=ebaa3e4576234cd46fc1c6ad61aa99d648f7268ca002652806e3d8c4e70fd60d&w=360",
        ad:"Sezar Salatı",
        qiymet:"12m",
        category:"salat"
    },
    {
        sekil:"https://img.freepik.com/free-photo/pizza-with-chicken-cheese-tomato-sauce_140725-3946.jpg?t=st=1716297591~exp=1716301191~hmac=5ff55b2a1fb8b118d2b1071de7f836f03625e658f2e39923c3ae7fdcea93ee88&w=360",
        ad:"Toyuqlu Pizza",
        qiymet:"10m",
        category:"pizza"
    },
    {
        sekil:"https://img.freepik.com/free-photo/top-view-mix-pizza-with-chicken-sausages-mushrooms-olives-board_140725-11548.jpg?t=st=1716297649~exp=1716301249~hmac=c6f38e66db350b113cb0d88c21b8bd07602827868a6fa730adf7692cfa7abc26&w=360",
        ad:"Göbələkli Pizza",
        qiymet:"10m",
        category:"pizza"
    },
    {
        sekil:"https://img.freepik.com/free-photo/slice-pizza-with-chicken-tomato-wooden-board_140725-3045.jpg?t=st=1716297635~exp=1716301235~hmac=335a3693c9946e7f68bba58d2f824110b174c2c0f6c231203ee8d23c11c4d769&w=360",
        ad:"Pizza Marqarita",
        qiymet:"11m",
        category:"pizza"
    },
    {
        sekil:"https://img.freepik.com/free-photo/side-view-lamb-kebab-with-baked-potato-vegetables-wooden-board_140725-10184.jpg?t=st=1716208885~exp=1716212485~hmac=8dbaa4c83d6e41da737513923e99c160a651d981f43363c8df33d53b314ddbb6&w=360",
        ad:"Urfa Kababı",
        qiymet:"13m",
        category:"kabab"
    },
    {
        sekil:"https://img.freepik.com/free-photo/front-view-mix-kebab-meat-with-onion-pita-bread-bread_140725-11398.jpg?t=st=1716208950~exp=1716212550~hmac=e04228a78ebda5dc514c8e8f28673f1100b98c9df0c6bbe35713fe03b9e83799&w=360",
        ad:"Quzu Kababı",
        qiymet:"14m",
        category:"kabab"
    },
    {
        sekil:"https://img.freepik.com/free-photo/grilled-chicken-cutlets-with-roasted-vegetables_140725-1146.jpg?t=st=1716208989~exp=1716212589~hmac=3b4f69089b66c0d3971eabd25aa6866d3474d5cb7fc9ca94ac9750fc4c0f7fc5&w=360",
        ad:"Toyuq Kababı",
        qiymet:"12m",
        category:"kabab"
    },
    {
        sekil:"https://img.freepik.com/premium-photo/pizza-with-slice-pepperoni-it_861622-178.jpg?w=360",
        ad:"Sucuklu Pide",
        qiymet:"11m",
        category:"pide"

    },
    {
        sekil:"https://img.freepik.com/free-photo/turkish-pizza-pide-with-pepperoni-tomato-herbs_114579-3772.jpg?t=st=1716209249~exp=1716212849~hmac=c8f00170233ef323b76fe4240b6a5e3c6b363e85011681724a0d92dc8db44020&w=360",
        ad:"Sosisli pide",
        qiymet:"15m",
        category:"pide"
    },
    {
        sekil:"https://img.freepik.com/free-photo/top-view-traditional-turkish-cuisine-turkish-pizza-pita-pide-with-different-stuffing-meat-cheese-slices-veal-vegetables-wooden-table_140725-12618.jpg?t=st=1716209198~exp=1716212798~hmac=a12c21afd180fc26d8b7ed58148f228e426b00344668cbf5a2d411b7b6bf8ca7&w=360",
        ad:"Qiyməli Pide",
        qiymet:"11m",
        category:"pide"
    },
    {
        sekil:"https://img.freepik.com/free-photo/chocolate-cake-with-nuts-ice-cream-top-strawberries-1_140725-8388.jpg?t=st=1716209974~exp=1716213574~hmac=0ef33f3630abc3feaeacd462bd1261b278c01d319cd14ba919d75bee4ea5e8df&w=360",
        ad:"Chocolate cake",
        qiymet:"8m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/berry-cheesecake-covered-with-berry-gelatine_140725-5729.jpg?t=st=1716210182~exp=1716213782~hmac=f46acee475511571c44f127f554f2f0b733f4b812c2b6d8ef60168f97a7ed6ec&w=360",
        ad:"Berry cheesecake",
        qiymet:"7m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/side-view-two-strawberry-cheesecake-with-cup-tea-cinnamon_140725-14015.jpg?t=st=1716209738~exp=1716213338~hmac=a672dbe4f49c46d36ee0bf3c284134e8ae2a525bd0e1ce6ed97d6433c0a49199&w=360",
        ad:"Strawberry cheesecake",
        qiymet:"7m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/napoleon-cake-with-black-tea-table_140725-5346.jpg?t=st=1716209906~exp=1716213506~hmac=148b45107872d14d6e418993ebc7d5a9efd618d4217e79cc077f8b5e7e60e6fe&w=360",
        ad:"Napaleon cake",
        qiymet:"8m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/chocolate-cheesecake-with-tea-side-view_140725-9107.jpg?t=st=1716209414~exp=1716213014~hmac=516cb1069fd643f29b19dcd15748f344683496c4d39862b1b45aa0f944ca4fb0&w=360",
        ad:"San Sebastian",
        qiymet:"7m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/top-view-choco-slice-tasty-yummy-inside-white-plate-brown-desk_140725-14545.jpg?t=st=1716209358~exp=1716212958~hmac=3541ab12cae97ddee97194e495591aac197340aee2016bc383e84a345fba015c&w=360",
        ad:"Islak Kek",
        qiymet:"7m"
    },
    {
        sekil:"https://img.freepik.com/free-photo/delicious-coffee-easter-decorations_23-2150249795.jpg?t=st=1715599981~exp=1715603581~hmac=a54377dbb9f25b326c0784b1e8e6c4b705d86304c2bd81e5816b80ab9a4e2ac9&w=360",
        ad:"Black Mocha",
        qiymet:"7m"
    },{
        sekil:"https://img.freepik.com/free-photo/glass-americano-coffee-grey-background-decorated-with-coffee-beans_140725-1657.jpg?t=st=1715599921~exp=1715603521~hmac=a88be2264b93f650c5fe10b569096726186833098f8c367e8736d3b67e889a03&w=360",
        ad:"Coffee Americano",
        qiymet:"5m"
    },
    {
        sekil:"https://img.freepik.com/premium-photo/ice-latte-iced-coffee-with-milk-ice-cubes-glass-beaker-against-dark-background-refreshing-drink-summer-drink_262193-1904.jpg?w=360",
        ad:"Espresso Macchiato",
        qiymet:"5m"
    },
    {
        sekil:"https://img.freepik.com/premium-photo/professional-male-barista-pouring-steamed-milk-into-coffee-cup-making-latte-art_67155-23307.jpg?w=360",
        ad:"Cappuccino",
        qiymet:"5m"
    },{
        sekil:"https://img.freepik.com/premium-photo/natural-yogurt-with-fresh-berries-wooden-table-green-background_392895-413123.jpg?w=360",
        ad:"Oreo strawberries",
        qiymet:"7m"
    },{
        sekil:"https://img.freepik.com/premium-photo/ice-cream-with-cream-dessert-top-view_187166-6266.jpg?w=360",
        ad:"Oreo shakes",
        qiymet:"7m"
    }
]
for (let i = 0; i < baza.length; i++) {
    $(".BIR").append(` 
    <div class="birinci" cat="${baza[i].category}">
    <img src="${baza[i].sekil}" alt="">
    <h1>${baza[i].ad}</h1>
    <b>${baza[i].qiymet}</b>
    <button class="elave" onclick="bir(${i})">Add</button>    
    </div>`)
        
    }
    
    var total = 0;
    function bir(i) {
        $(".sebet").show()
        $(".icdeki-Main").append(`
        <div class="divv1">
        <h1>${baza[i].ad}</h1>
        <b>${baza[i].qiymet}</b>
        <img src="${baza[i].sekil}" alt="">
         <i class="fa-solid fa-trash sebetdelete" ></i>
        </div>
        `)
        total+= Number(baza[i].qiymet.slice(0,-1))
        $(".icdeki h1 span").text(total)
    }

    var ust=0;
    $(".elave").click(function () {
        ust++
        $(".spans span").text(ust)
    })

 
$("body").on("click",".sebetdelete",function () {
    total-=Number($(this).parents(".divv1").children().eq(1).text().slice(0,-1))
    $(this).parents(".divv1").remove()
        $(".icdeki h1 span").text(total)
        ust--
        $(".spans span").text(ust)
})

     
    $("input").keyup(function () {
        var deyer = $(".search").val()
        $(".birinci h1").each(function () {
            $(this).parent().hide()
            if ($(this).text().toUpperCase().includes(deyer.toUpperCase())) {
                $(this).parent().show()
            }
        })
    })
    $(".menu button").click(function(){
        var a = $(this).attr("class")
        $(".birinci").each(function () {
            if ($(this).attr("cat") == a || a == "hamısı" ) {
                $(this).show()
            }
            else{
                $(this).hide()
            }
        })
    })
    
    $(".clear").click(function () {
        $(".divv1").remove()
        total=0
        $(".icdeki h1 span").text(total)
        ust = 0;
        $(".spans span").text(ust)
    })
    
    

    $(".shop").click(function () {
        $(".sebet").show()
    })
   
    $(".fa-x").click(function () {
        $(".sebet").hide()
    })
   

    

    

    



