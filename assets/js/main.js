const email = document.querySelector(".email");
const menu = document.querySelector(".draw-menu");
const iconHamburguer = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const iconShoppingCar = document.querySelector(".shopping-car");
const carShopping = document.querySelector("#carShopping");
const detailProduct = document.querySelector("#detailProduct");
const productClose = document.querySelector(".product-close");
email.addEventListener("click", toggleMenu);
iconHamburguer.addEventListener("click", toggleMenuMobile);
iconShoppingCar.addEventListener("click", toggleAsideShoppingCar);
productClose.addEventListener("click", closeProductDetail);

function toggleMenu() {
  const isAsideClosed = carShopping.classList.contains("inactive");
  detailProduct.classList.add("inactive");
  if (!isAsideClosed) carShopping.classList.add("inactive");
  menu.classList.toggle("inactive");
}
function toggleMenuMobile() {
  const isAsideClosed = carShopping.classList.contains("inactive");
  detailProduct.classList.add("inactive");

  if (!isAsideClosed) carShopping.classList.add("inactive");
  menuMobile.classList.toggle("inactive");
}
function toggleAsideShoppingCar() {
  const isMenuMobileClosed = menuMobile.classList.contains("inactive");
  const isMenuClosed = menu.classList.contains("inactive");
  detailProduct.classList.add("inactive");
  if (!isMenuMobileClosed) menuMobile.classList.add("inactive");
  if (!isMenuClosed) menu.classList.add("inactive");
  carShopping.classList.toggle("inactive");
}
function openProductDetail() {
  carShopping.classList.add("inactive");
  menu.classList.add("inactive");
  menuMobile.classList.add("inactive");
  detailProduct.classList.remove("inactive");
}
function closeProductDetail() {
  detailProduct.classList.add("inactive");
}
const productList = [];
productList.push({
  name: "Bike",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: "120,00",
});
productList.push({
  name: "Camera",
  image:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "80,00",
});
productList.push({
  name: "Laptop",
  image:
    "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "500,00",
});
productList.push({
  name: "Bike",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: "120,00",
});
productList.push({
  name: "Camera",
  image:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "80,00",
});
productList.push({
  name: "Laptop",
  image:
    "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "500,00",
});
productList.push({
  name: "Bike",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: "120,00",
});
productList.push({
  name: "Camera",
  image:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "80,00",
});
productList.push({
  name: "Laptop",
  image:
    "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: "500,00",
});

renderProducts(productList);
function renderProducts(arr) {
  arr.forEach((product) => {
    const imageProduct = document.createElement("img");
    imageProduct.src = product.image;
    imageProduct.alt = "Product image";
    imageProduct.addEventListener("click", openProductDetail);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    const productPrice = document.createElement("p");
    productPrice.innerText = `$ ${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    priceContainer.append(productPrice, productName);

    const figureProduct = document.createElement("figure");
    const imageIconCar = document.createElement("img");
    imageIconCar.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    imageIconCar.alt = "icon car";
    figureProduct.appendChild(imageIconCar);

    const footerContain = document.createElement("div");
    footerContain.classList.add("footer-contain");
    footerContain.append(priceContainer, figureProduct);

    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");
    cardProduct.append(imageProduct, footerContain);

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardProduct);
  });
}
