'use strict';
const addToCartButton = document.querySelectorAll('.add-to-cart');
const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');
const productPrice = document.querySelectorAll('.price');
const productName = document.querySelectorAll('.big-product-text');
const cartItemsCount = document.querySelector('#cart-items-cout');
const cartItems = document.querySelector('.cart-items');
const addAmount = document.querySelectorAll('.add-amount');
const inCartImage = document.querySelector('.in-cart-image');
const inCartP = document.querySelector('#in-cart-p');
addToCartButton.forEach((e, index) => {
    e.addEventListener('click', function () {
        addToCart(index);
    });
});
let finalPrice = 0;
let itemsAmount = 0;
function addToCart(index) {
    var _a;
    finalPrice += Number((_a = productPrice[index].lastChild) === null || _a === void 0 ? void 0 : _a.nodeValue);
    addToCartButton[index].classList.add('hide');
    addAmount[index].classList.remove('hide');
    itemsAmount += 1;
    if (cartItemsCount && cartItemsCount.lastChild) {
        cartItemsCount.lastChild.nodeValue = itemsAmount.toString();
    }
    const inCartAppear = [inCartImage, inCartP];
    inCartAppear.forEach((e) => e === null || e === void 0 ? void 0 : e.classList.add('displayNone'));
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const itemName = document.createElement('p');
    itemName.textContent = productName[index].textContent;
    cartItem.appendChild(itemName);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = productPrice[index].textContent;
    cartItem.appendChild(itemPrice);
    cartItems === null || cartItems === void 0 ? void 0 : cartItems.appendChild(cartItem);
}
