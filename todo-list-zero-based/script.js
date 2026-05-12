const input = document.querySelector(".todo-input");
const button = document.querySelector(".add-btn");
const list = document.querySelector(".todo-list");

// Click hadisəsi
button.addEventListener("click", addTask);

// Enter düyməsi ilə əlavə etmək üçün
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Məlumat daxil edin");
        return;
    }

    const li = document.createElement("li");
    
    // Task mətni üçün span (çünki düymə də olacaq)
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn" style="background:red; color:white; border:none; border-radius:4px; cursor:pointer;">Sil</button>
    `;

    // Silmə funksiyası
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    // Tamamlandı (Toggle) funksiyası
    li.addEventListener("click", (e) => {
        if(e.target.tagName !== 'BUTTON') {
            li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
            li.style.opacity = li.style.opacity === "0.5" ? "1" : "0.5";
        }
    });

    list.appendChild(li);
    input.value = "";
    input.focus(); // Yenidən yazmaq üçün inputu aktiv saxlayır
}