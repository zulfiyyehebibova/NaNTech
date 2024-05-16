


$("button").click(function () {
    if ($("input").val() == ""){
        alert()
    }
    else{
        $("ul").append(`<li>${$("input").val()}`)
    }
    $("input").val("")
})