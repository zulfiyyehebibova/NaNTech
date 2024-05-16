



$("input").keyup(function () {
    $(".dessert div").addClass("sifirla")
    var deyer = $(".search").val()
    $(".dessert div h1").each(function () {
        $(this).parent().hide()
        if ($(this).text().toUpperCase().includes(deyer.toUpperCase())) {
            $(this).parent().show()
        }
    })
})
        
   