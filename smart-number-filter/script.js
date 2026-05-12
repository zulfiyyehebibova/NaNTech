const baza = [3, 9, 18, 15, 45, 75, 90, 12, 30, 93];

const btn1 = document.querySelector(".bir");
const btn2 = document.querySelector(".iki");
const div1 = document.getElementById("id1");
const div2 = document.getElementById("id2");

function filterAndShow(targetDiv, conditionFn) {
    // Əvvəlcə daxili təmizləyirik
    targetDiv.innerHTML = "";
    
    // Şərtə uyğun rəqəmləri tapırıq
    const filtered = baza.filter(conditionFn);
    
    if (filtered.length === 0) {
        targetDiv.innerHTML = "<p>Tapılmadı</p>";
        return;
    }

    // Nəticələri ekrana çıxarırıq
    filtered.forEach(num => {
        const h1 = document.createElement("h1");
        h1.textContent = num;
        targetDiv.appendChild(h1);
    });
}

// Düymə 1: 3-ə və 9-a bölünənlər
btn1.addEventListener("click", () => {
    filterAndShow(div1, num => num % 3 === 0 && num % 9 === 0);
});

// Düymə 2: 3-ə və 5-ə bölünənlər
btn2.addEventListener("click", () => {
    filterAndShow(div2, num => num % 3 === 0 && num % 5 === 0);
});
