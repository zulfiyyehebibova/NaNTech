document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#taskInput");
    const addBtn = document.querySelector("#addBtn");
    const taskList = document.querySelector("#taskList");

    const addTask = () => {
        const val = taskInput.value.trim();

        if (val === "") {
            alert("Zəhmət olmasa bir şey yazın!");
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text">${val}</span>
            <i class="fa-solid fa-trash delete-icon"></i>
        `;

        taskList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();

        updateNumbers(); 
    };

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addTask();
    });

    taskList.addEventListener("click", (e) => {
        const btn = e.target.closest(".delete-icon");
        if (!btn) return;

        const li = btn.closest("li");

        li.classList.add("remove");

        setTimeout(() => {
            li.remove();
            updateNumbers();
        }, 300);
    });

    function updateNumbers() {
        const items = taskList.querySelectorAll("li");

        items.forEach((li, index) => {
            const span = li.querySelector(".task-text");
            span.textContent = `${index + 1}) ${span.textContent.replace(/^\d+\)\s*/, "")}`;
        });
    }
});