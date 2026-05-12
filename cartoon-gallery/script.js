const previewImage = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateGallery(index) {
  currentIndex = index;

  previewImage.src = thumbnails[currentIndex].src;
  
  thumbnails.forEach(thumb => thumb.classList.remove("active"));
  thumbnails[currentIndex].classList.add("active");
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    updateGallery(index);
  });
});

nextBtn.addEventListener("click", () => {
  let nextIndex = (currentIndex + 1) % thumbnails.length;
  updateGallery(nextIndex);
});

prevBtn.addEventListener("click", () => {
  let prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateGallery(prevIndex);
});