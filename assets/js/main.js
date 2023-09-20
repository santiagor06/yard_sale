const email = document.querySelector(".email");
const menu = document.querySelector(".draw-menu");
const iconHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
email.addEventListener("click", toggleMenu);
iconHamburguer.addEventListener("click", toggleMenuMobile);

function toggleMenu() {
  menu.classList.toggle("inactive");
}
function toggleMenuMobile() {
  menuMobile.classList.toggle("inactive");
}
