const baza = [
  {
    sekil: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/4350/image/s768x1300/AdobeStock_123823873_433578_reduced.jpg",
    yazi: "Vaşaq",
    aciqlama: "Vəhşi Pişik",
    yazilar: "Vaşaqlar meşələrin gizli ovçularıdır. Onlar qulaqlarındakı fırçaya bənzər tükləri və kəskin görmə qabiliyyətləri ilə tanınırlar."
  },
  {
    sekil: "https://www.aaha.org/wp-content/uploads/2024/03/b5e516f1655346558958c939e85de37a.jpg",
    yazi: "Yenot",
    aciqlama: "Meşə Heyvanı",
    yazilar: "Yenotlar olduqca maraqlı və ağıllı heyvanlardır. Onlar yeməklərini yumadan yeməmələri və 'maskalı' üzləri ilə məşhurdurlar."
  },
  {
    sekil: "https://tebiet.qrup313.com/images/delfin1.jpg",
    yazi: "Delfinlər",
    aciqlama: "Okean Möcüzəsi",
    yazilar: "Delfinlər okeanların ən dostcanlı və intellektual canlıları hesab olunur. Onlar dalğaların üzərində tullanmağı çox sevirlər."
  }
];

const cards = document.getElementById("cards");

function renderCards(){
  let html = "";

  baza.forEach((item, i) => {
    html += `
      <div class="card" onclick="openModal(${i})">
        <img src="${item.sekil}" />
        <h3>${item.yazi}</h3>
        <p>${item.aciqlama}</p>
      </div>
    `;
  });

  cards.innerHTML = html;
}

renderCards();

// OPEN MODAL
function openModal(i){
  const item = baza[i];

  document.getElementById("modal-body").innerHTML = `
    <h2>${item.yazi}</h2>
    <p>${item.aciqlama}</p>
    <img src="${item.sekil}" />
    <p>${item.yazilar}</p>
  `;

  document.getElementById("modal").style.display = "flex";
}

// CLOSE MODAL
function closeModal(){
  document.getElementById("modal").style.display = "none";
}