


$(".add").click(function () {
    $(".boyuk").hide()
    $(".yuxari").show()
})


$(".create").click(function () {
    if ($(".yuxari .input").val() == "") {
        $(".yuxari input").css("border-color", "red")
    }
    else {
        $("table tbody").append(`
        <tr>
        <th></th>
        <th>
        <input type="checkbox">
        </th>
        <th>${$(".first").val()}</th>
        <th>${$(".last").val()}</th>
        <th>${$(".position").val()}</th>
        <th>${$(".office").val()}</th>
        <th>${$(".salary").val()}</th>
        <th><i id="one" class="fa-solid fa-pen"></i>  
        <i id="two" class="fa-solid fa-trash"></i></th>
        </tr>
        `)
        counter()
        $(".yuxari").hide()
        $(".boyuk").show()
    }
})
$(".yuxari .fa-x").click(function () {
    $(".yuxari").hide()
    $(".boyuk").show()
})

var sira
function counter() {
    sira = 0
    $("tbody tr").each(function () {
        sira++
        $(this).children().eq(0).text(sira)
    })
}

var row;
$("body").on("click",".fa-pen",function(){
    $(".asagi").show()
    $(".boyuk").hide()
    row=$(this).parents("tr")
    console.log($(this).parents("tr").children().eq(2).text());
    $(".ad").val((row).children().eq(2).text())
    $(".soyad").val((row).children().eq(3).text())
    $(".movqe").val((row).children().eq(4).text())
    $(".ofis").val((row).children().eq(5).text())
    $(".maas").val((row).children().eq(2).text())
    
})


$(".start").click(function () {
    if ($(".asagi .input").val() == "") {
        $(".asagi input").css("border-color", "red")
    }
    else {
        $(".asagi").hide()
        $(".boyuk").show()
    }
})




var sira
function family() {
    sira = 0
    $("tbody tr").each(function () {
        sira++
        $(this).children().eq(0).text(sira)
    })
}

$(".asagi .fa-x").click(function () {
    $(".asagi").hide()
    $(".boyuk").show()
})





$("select").change(function () {
    $("tbody tr").hide()
    $(`tbody tr:lt(${$(this).val()})`).show()
})




$(".search").keyup(function () {
    var deyer = $(this).val()
    
    $("tbody tr").each(function () {
        if ($(this).text().toUpperCase().includes(deyer.toUpperCase())) {
            $(this).show()
        }
        else {
            $(this).hide()
        }
    })
    
})

$("body").on("click",".fa-trash",function () {
    sil=$(this).parents("tr")
    $(".boyuk").hide()
    $(".qirmizi").show()

    $(".beli").click(function(){
    $(".boyuk").show()
    $(".qirmizi").hide()
    sil.remove()
    family()
    })

    $(".xeyr").click(function () {
    $(".boyuk").show()
    $(".qirmizi").hide()
    })
})

$("#uc").click(function () {
    $(".boyuk").show()
    $(".qirmizi").hide()
})

