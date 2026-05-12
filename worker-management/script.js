document.addEventListener("DOMContentLoaded", () => {
    let targetRow = null;

    const overlay = document.querySelector(".overlay");
    const modalBoxes = document.querySelectorAll(".modal-box");
    const searchInput = document.querySelector(".search-input");
    const entrySelect = document.querySelector("#entrySelect");
    const tbody = document.querySelector("tbody");

    
    const openModal = (modalClass) => {
        overlay.style.display = "block";
        document.querySelector(modalClass).style.display = "block";
    };

    
    const closeModal = () => {
        overlay.style.display = "none";
        modalBoxes.forEach(modal => modal.style.display = "none");
        document.querySelectorAll(".modal-box input").forEach(input => input.value = "");
    };

    
    const updateTable = () => {
        const searchValue = searchInput.value.toLowerCase();
        const limit = parseInt(entrySelect.value);
        let visibleCount = 0;

        const rows = tbody.querySelectorAll("tr");

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            const isMatch = rowText.includes(searchValue);

            if (isMatch && visibleCount < limit) {
                row.style.display = "";
                visibleCount++;
            } else {
                row.style.display = "none";
            }
        });

        const visibleRows = tbody.querySelectorAll("tr:not([style*='display: none'])");
        visibleRows.forEach((row, index) => {
            row.cells[0].innerText = index + 1;
        });
    };

    
    document.querySelectorAll(".close-icon, .overlay, .xeyr").forEach(btn => {
        btn.addEventListener("click", closeModal);
    });

    
    document.querySelector(".add").addEventListener("click", () => openModal(".create-modal"));

    document.querySelector(".create").addEventListener("click", () => {
        const fName = document.querySelector(".first").value.trim();
        const lName = document.querySelector(".last").value.trim();
        const pos = document.querySelector(".position").value.trim();
        const off = document.querySelector(".office").value.trim();
        const sal = document.querySelector(".salary").value.trim();

        if (!fName || !lName) {
            alert("Please fill name and surname!");
            return;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td></td>
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${pos}</td>
            <td>${off}</td>
            <td>${sal}</td>
            <td>
                <i class="fa-solid fa-pen btn-edit"></i>
                <i class="fa-solid fa-trash btn-delete"></i>
            </td>
        `;
        tbody.appendChild(tr);
        updateTable();
        closeModal();
    });

    
    tbody.addEventListener("click", (e) => {
        const target = e.target;
        targetRow = target.closest("tr");

        if (target.classList.contains("btn-edit")) {
            document.querySelector(".ad").value = targetRow.cells[1].innerText;
            document.querySelector(".soyad").value = targetRow.cells[2].innerText;
            document.querySelector(".movqe").value = targetRow.cells[3].innerText;
            document.querySelector(".ofis").value = targetRow.cells[4].innerText;
            document.querySelector(".maas").value = targetRow.cells[5].innerText;
            openModal(".edit-modal");
        }


        if (target.classList.contains("btn-delete")) {
            openModal(".delete-modal");
        }
    });

    document.querySelector(".start").addEventListener("click", () => {
        if (targetRow) {
            targetRow.cells[1].innerText = document.querySelector(".ad").value;
            targetRow.cells[2].innerText = document.querySelector(".soyad").value;
            targetRow.cells[3].innerText = document.querySelector(".movqe").value;
            targetRow.cells[4].innerText = document.querySelector(".ofis").value;
            targetRow.cells[5].innerText = document.querySelector(".maas").value;
            closeModal();
        }
    });

    document.querySelector(".beli").addEventListener("click", () => {
        if (targetRow) {
            targetRow.remove();
            updateTable();
            closeModal();
        }
    });

    searchInput.addEventListener("keyup", updateTable);
    entrySelect.addEventListener("change", updateTable);

    updateTable();
});