const products = [
    {
        sekil: "https://strgimgr.b-cdn.net/img/product/280/d94004d6-6626-4e95-a06c-5ee0ae325d2d.jpeg",
        ad: "Airpods Pro",
        qiymet: 249,
        category: "Airpods"
    },
    {
        sekil: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
        ad: "Apple Watch",
        qiymet: 409,
        category: "Apple Watch"
    },
    {
        sekil: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
        ad: "Macbook Pro",
        qiymet: 1999,
        category: "Macbook Pro"
    },
    {
        sekil: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
        ad: "iPhone 11 pro",
        qiymet: 1066,
        category: "iPhone 11 pro"
    }
];

// DOM
const container = document.querySelector(".products-container");
const cartItems = document.querySelector(".cart-items");
const search = document.querySelector("#search");
const modal = document.querySelector("#cartModal");
const cartBtn = document.querySelector("#cartBtn");
const closeCart = document.querySelector(".close-cart");
const buttons = document.querySelectorAll(".btn");

let activeCategory = "all";
let cart = [];

/* RENDER */
function render(list) {
    container.innerHTML = "";

    list.forEach((p, index) => {
        container.innerHTML += `
        <div class="card" data-cat="${p.category}">
            <img src="${p.sekil}">
            <h3>${p.ad}</h3>
            <p class="price">${p.qiymet} ₼</p>
            <button class="add-btn" onclick="addCart(${index})">Add</button>
        </div>`;
    });
}

render(products);

/* CART */
window.addCart = function (i) {
    cart.push(products[i]);
    renderCart();
    modal.style.display = "block";
}

function renderCart() {
    cartItems.innerHTML = "";

    cart.forEach((item, i) => {
        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.sekil}">
            <p>${item.ad}</p>
            <p>${item.qiymet}₼</p>
            <button onclick="removeItem(${i})">🗑</button>
        </div>`;
    });
}

window.removeItem = function (i) {
    cart.splice(i, 1);
    renderCart();
}

/* SEARCH + FILTER */
function applyFilters() {
    const val = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const cat = card.dataset.cat.toLowerCase();

        const matchSearch = title.includes(val);
        const matchCat = activeCategory === "all" || cat === activeCategory;

        card.style.display = (matchSearch && matchCat) ? "block" : "none";
    });
}

/* SEARCH */
search.addEventListener("input", applyFilters);

/* FILTER */
buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        activeCategory = btn.dataset.cat.toLowerCase();
        applyFilters();
    });
});

/* CART OPEN/CLOSE */
cartBtn.onclick = () => modal.style.display = "block";
closeCart.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};