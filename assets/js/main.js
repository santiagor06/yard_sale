const email = document.querySelector(".email");
const menu = document.querySelector(".draw-menu");
const iconHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const iconShoppingCar = document.querySelector(".shopping-car");
const aside = document.querySelector(".detail-container");
email.addEventListener("click", toggleMenu);
iconHamburguer.addEventListener("click", toggleMenuMobile);
iconShoppingCar.addEventListener("click", toggleAsideShoppingCar);

function toggleMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) aside.classList.add("inactive");
  menu.classList.toggle("inactive");
}
function toggleMenuMobile() {
  const isAsideClosed = aside.classList.contains("inactive");

  if (!isAsideClosed) aside.classList.add("inactive");
  menuMobile.classList.toggle("inactive");
}
function toggleAsideShoppingCar() {
  const isMenuMobileClosed = menuMobile.classList.contains("inactive");
  const isMenuClosed = menu.classList.contains("inactive");
  if (!isMenuMobileClosed) menuMobile.classList.add("inactive");
  if (!isMenuClosed) menu.classList.add("inactive");
  aside.classList.toggle("inactive");
}
