let selectedItem = null;

function selectItem(item) {
    // əvvəlki seçimi sil
    document.querySelectorAll('.item').forEach(el => {
        el.classList.remove('active');
    });

    // yeni seç
    item.classList.add('active');
    selectedItem = item;
}

function moveRight() {
    if (selectedItem && selectedItem.parentElement.id === "box1") {
        document.getElementById("box2").appendChild(selectedItem);
        selectedItem.classList.remove("active");
        selectedItem = null;
    }
}

function moveLeft() {
    if (selectedItem && selectedItem.parentElement.id === "box2") {
        document.getElementById("box1").appendChild(selectedItem);
        selectedItem.classList.remove("active");
        selectedItem = null;
    }
}