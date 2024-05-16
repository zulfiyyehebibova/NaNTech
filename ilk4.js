


$("input").keyup(function () {
    var deyer = $(".search").val()
    $(".ic h1").each(function () {
        $(this).parent().hide()
        if ($(this).text().toUpperCase().includes(deyer.toUpperCase())) {
            $(this).parent().show()
        }
    })
})

