"use strict";

// elements
const container = document.getElementById("cart-prodcut-container");
const totalPriceElement = document.getElementById("total-price");

// global
let cart = loadCart();

// methods
function main() {
  loadCart();
  renderCart();
  updateTotalPrice();
}

function renderCart() {
  container.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    renderProduct(cart[i], i);
  }
}

function renderProduct(product, index) {
  const productElement = document.createElement("div");
  const imageContainer = document.createElement("div");
  const imageElement = document.createElement("img");
  const infoContainer = document.createElement("div");
  const priceContainer = document.createElement("p");
  const removeProductButton = document.createElement("button");

  // main product container
  productElement.classList.add("cart-product");
  productElement.appendChild(imageContainer);
  productElement.appendChild(infoContainer);

  // image
  imageElement.src = product.src;
  imageContainer.appendChild(imageElement);
  imageContainer.classList.add("image-container");

  //info
  priceContainer.appendChild(document.createTextNode(`$${product.price}`));
  removeProductButton.classList.add("btn");
  removeProductButton.appendChild(document.createTextNode("Remove from Cart"));
  removeProductButton.addEventListener("click", function () {
    removeFromCart(index);
  });
  infoContainer.appendChild(priceContainer);
  infoContainer.appendChild(removeProductButton);

  container.appendChild(productElement);
}
function updateTotalPrice() {
  let totalPrice = 0;
  for (let index = 0; index < cart.length; index++) {
    totalPrice += cart[index].price;
  }
  totalPriceElement.innerText = floor(totalPrice);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  main();
}

// start cart page
main();
