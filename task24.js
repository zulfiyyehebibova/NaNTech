
var a=0;
var b=0;

document.querySelector(".sag").addEventListener("click",function () {
    if (a==180) {
        alert()
    }
    else{
        a+=20;
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    }
    
})

document.querySelector(".sol").addEventListener("click",function () {
    if (a==-180) {
        alert()
    }
    else{
        a-=20;
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    }
   
})

document.querySelector(".yuxari").addEventListener("click",function () {
    if (b==-120) {
        alert()
    }
    else{
        b-=20;
        document.querySelector(".qirmizi").style.marginTop=b+"px"
    }
    
})

document.querySelector(".asagi").addEventListener("click",function () {
    if (b==120) {
        alert()
    }
    else{
        b+=20;
        document.querySelector(".qirmizi").style.marginTop=b+"px"
    }
   
})

document.querySelector(".sagyuxari").addEventListener("click",function () {
    if (b==-120) {
        alert()
    }
    else{
        b-=20;
        a+=20;
        document.querySelector(".qirmizi").style.marginTop=b+"px"
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    }
   

})

document.querySelector(".sagasagi").addEventListener("click",function () {
    if (b==120) {
        alert()
    }
    else{
        b+=20;
        a+=20
        document.querySelector(".qirmizi").style.marginTop=b+"px"
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    }
    

})

document.querySelector(".solyuxari").addEventListener("click",function () {
    if (b==-120) {
        alert()
    }
    else{
        b-=20;
        a-=20
        document.querySelector(".qirmizi").style.marginTop=b+"px"
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    }
   

})
document.querySelector(".solasagi").addEventListener("click",function () {
    if (b==120) {
        alert()
    }
    else{
        b+=20;
        a-=20
        document.querySelector(".qirmizi").style.marginTop=b+"px"
        document.querySelector(".qirmizi").style.marginLeft=a+"px"
    
    }
   

})

document.querySelector(".merkez").addEventListener("click",function () {
a=0;
b=0;
document.querySelector(".qirmizi").style.marginTop=b+"px"
document.querySelector(".qirmizi").style.marginLeft=a+"px"

  
})







