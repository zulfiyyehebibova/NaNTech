var saniye=0;
var deqiqe=0;
var saat=0;

setInterval(time,1000)
function time() {
    saniye+=6;
    document.querySelector(".saniye").style.transform=`rotate(${saniye}deg)`
    if (saniye==360) {
        saniye=0;
        deqiqe+=6;
        document.querySelector(".deqiqe").style.transform=`rotate(${deqiqe}deg)`

        if (deqiqe%90==0) {
            saat+=7.5;
            document.querySelector(".saat").style.transform=`rotate(${saat}deg)`
        }   
    }
}