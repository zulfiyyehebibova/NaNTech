// fetch(`https://localhost:44309/api/Home`)
// .then(res=>res.json())
// .then(data=>console.log(data))

$.get(`https://localhost:44309/api/Home`,function (res) {
    

    console.log(res);
    $(res).each(function () {
        console.log(this)
        $("tbody").append(`
            <tr class="${this.usersId}">
            <th>${this.usersId}</th>
            <th>${this.usersName}</th>
            <th>${this.usersNickName}</th>
            <th>${this.usersPhoto}</th>
            <th>
              <button class="sil">Delete</button>
                    <button  class="duzeliset">Edit</button>
            </th>
            </tr>`)
    })
})

$(".create").click(()=>{
    let newData = {
            "usersName":$(`#UsersName`).val(),
            "usersNickName":$(`#UsersNickName`).val(),
            "usersPhoto":$(`#UsersPhoto`).val(),
    }
    $.ajax({
        url : `https://localhost:44309/api/home`,
        type : `post`,
        data : JSON.stringify(newData),
        contentType : "application/json",
        success : function (x) {
            // console.log(x);
            $("tbody").append(`
                <tr>
                <th>${x.usersId}</th>
                <th>${x.usersName}</th>
                <th>${x.usersNickName}</th>
                <th>${x.usersPhoto}</th>
                <th>
                  <button class="sil">Delete</button>
                        <button  class="duzeliset">Edit</button>
                </th>
                </tr>`)
        

        },
        error:function(x) {
            console.log(x);
        }   
        
    })
    $(".boxs").hide()
    $(".divs").show() 
})


$(".add").click(function () {
    $(".boxs").show()
    $(".divs").hide()
})

$(".fa-x").click(function () {
    $(".boxs").hide()
    $(".divs").show()
})



$("body").on("click",".sil",function () {
    $.ajax({
        url : `https://localhost:44309/api/home/` + $(this).parents("tr").attr("class"),
        type : `delete`,
        success : function (x) {
console.log(x);


        },
        error:function(x) {
            console.log(x);
        },
    })
})