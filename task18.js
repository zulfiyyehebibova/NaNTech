


document.querySelector("button").addEventListener("click", function () {
    if (document.querySelector("input").value=="") {
        alert("melumat daxil edin")
    }
    else{
          document.querySelector("ul").innerHTML += `<li>${document.querySelectorAll("li").length})${document.querySelector("input").value}</li>`
      }
    document.querySelector("input").value=""
        
    })
