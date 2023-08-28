const btn = document.getElementById("catalog-btn");
const catalogCard = document.getElementById("catalog-card");
btn.addEventListener("click", myButtonFunc);
function myButtonFunc() {
  catalogCard.classList.toggle("animation-class");
}

const btnOpen = document.getElementById("modal1");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});
