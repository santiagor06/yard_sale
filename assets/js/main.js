const email = document.querySelector(".email");
const menu = document.querySelector(".draw-menu");
email.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("inactive");
}
