const select = document.getElementById("filterSelect");
const rows = document.querySelectorAll("#tableBody tr");

select.addEventListener("change", function () {
    const value = this.value;

    rows.forEach(row => {
        const id = row.children[0].innerText;

        if (value === "all") {
            row.style.display = "";
        }
        else if (id === value) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
});