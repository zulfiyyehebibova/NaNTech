



document.querySelector(".bir").addEventListener("click",function () {
    Deyer1=document.querySelector("#Bir").value
    Deyer2=document.querySelector("#Iki").value
    Hasil=Deyer1*Deyer2
    console.log(Hasil);
    document.querySelector(".bes").innerText = Hasil
})


document.querySelector(".iki").addEventListener("click",function () {
    Deyer1=Number(document.querySelector("#Bir").value)
    Deyer2=Number(document.querySelector("#Iki").value)
    Cem=Deyer1+Deyer2
    console.log(Cem);
    document.querySelector(".bes").innerText = Cem

})


document.querySelector(".uc").addEventListener("click",function () {
    Deyer1=Number(document.querySelector("#Bir").value)
    Deyer2=Number(document.querySelector("#Iki").value)
    Ferq=Deyer1-Deyer2
    console.log(Ferq);
    document.querySelector(".bes").innerText = Ferq

})

document.querySelector(".dord").addEventListener("click",function () {
    Deyer1=Number(document.querySelector("#Bir").value)
    Deyer2=Number(document.querySelector("#Iki").value)
    Bol=Deyer1/Deyer2
    console.log(Bol);
    document.querySelector(".bes").innerText = Bol

})


