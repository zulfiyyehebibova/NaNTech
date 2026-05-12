const products = [
  {
    title: "Mountain",
    images: [
      "https://picsum.photos/id/1011/500/300",
      "https://picsum.photos/id/1012/500/300",
      "https://picsum.photos/id/1013/500/300"
    ]
  },
  {
    title: "Sea",
    images: [
      "https://picsum.photos/id/1015/500/300",
      "https://picsum.photos/id/1016/500/300",
      "https://picsum.photos/id/1018/500/300"
    ]
  },
  {
    title: "Animal",
    images: [
      "https://picsum.photos/id/1025/500/300",
      "https://picsum.photos/id/1024/500/300",
      "https://picsum.photos/id/1027/500/300"
    ]
  }
];

let currentProduct = 0;

function openModal(index){
  currentProduct = index;

  document.getElementById("modal").style.display = "block";

  document.getElementById("mainImg").src = products[index].images[0];
  document.getElementById("title").innerText = products[index].title;

  const thumbs = document.querySelectorAll(".thumbs img");

  thumbs.forEach((img, i) => {
    img.src = products[index].images[i];
  });
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

function changeImg(el){
  document.getElementById("mainImg").src = el.src;
}