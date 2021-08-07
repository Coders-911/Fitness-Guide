'use strict';


// elements
const container = document.getElementById('cart-prodcut-container');
const totalPriceElement = document.getElementById('total-price');
const createProductForm = document.getElementById('create-product');

const priceInput = document.getElementById('price-input');
const imageUrlInput = document.getElementById('image-url-input');

const checkoutButton = document.getElementById('checkout-button');


// events
createProductForm.addEventListener('submit', function (event) {
    event.preventDefault();
    cart.push({
        price: parseFloat(priceInput.value),
        src: imageUrlInput.value,
    });
    saveCart();
    main();

    imageUrlInput.value = '';
    priceInput.value = '';
});
checkoutButton.addEventListener('click', function () {
    const sure = confirm('are you sure you want to check out?');
    if (sure) {
        cart = [];
        saveCart();
        main();
    }    
})

// global
let cart = loadCart();

// methods
function main() {
    loadCart();
    renderCart();
    updateTotalPrice();
}

function renderCart() {
    container.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        renderProduct(cart[i], i);
    }    
}

function renderProduct(product, index) {

    const productElement = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imageElement = document.createElement('img');
    const infoContainer = document.createElement('div');
    const priceContainer = document.createElement('p');
    const count = document.createElement('span');
    const removeProductButton = document.createElement('button');

    // main product container
    productElement.classList.add('cart-product');
    productElement.appendChild(imageContainer);
    productElement.appendChild(infoContainer);

    // image
    imageElement.src = product.src;
    imageContainer.appendChild(imageElement);
    imageContainer.classList.add('image-container');


    //info
    priceContainer.appendChild(document.createTextNode(`$${product.price}`));
    priceContainer.classList.add('price')
    priceContainer.appendChild(count);
    removeProductButton.appendChild(document.createTextNode('Remove from Cart'));
    removeProductButton.addEventListener('click', function () { removeFromCart(index)
        JSalert();
     })
    infoContainer.appendChild(priceContainer);
    infoContainer.appendChild(removeProductButton);
    removeProductButton.classList.add('btn');



    container.appendChild(productElement);
}
function updateTotalPrice() {
    let totalPrice =0;
    for (let index = 0; index < cart.length; index++) {
        totalPrice += cart[index].price; 
    }
    totalPriceElement.innerText = Math.floor(totalPrice);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    main();
}
function JSalert(){
 
    swal({   title: "Your account will be deleted permanently!",   
    text: "Are you sure to proceed?",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Remove My Account!",   
    cancelButtonText: "I am not sure!",   
    closeOnConfirm: false,   
    closeOnCancel: false }, 
    function(isConfirm){   
        if (isConfirm) 
    {   
        swal("Account Removed!", "Your account is removed permanently!", "success");   
        } 
        else {     
            swal("Hurray", "Account is not removed!", "error");   
            } });
}
     


// start cart
main();

// cart page nav
window.addEventListener('scroll' , function(){
    let header = this.document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
    })
