var second=0
var minutes=0
var saat=0
var a=setInterval(time,1)

function time() {
    second++
    document.querySelector(".div3").innerText =  second 
    if (second==59) {
        second=0
        minutes++   
        document.querySelector(".div2").innerText =  minutes
    if (minutes==59) {
        minutes=0
        saat++
        document.querySelector(".div1").innerHTML =  saat
    }
    }
}




