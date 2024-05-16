

    $(".div1 img").click(function () {
        $(".ust").show()
        $(".divler").hide()
        $(".ust img").attr("src",$(this).attr("src"))
    })
    $("button").click(function () {
        $(".divler").show()
        $(".ust").hide()
    })