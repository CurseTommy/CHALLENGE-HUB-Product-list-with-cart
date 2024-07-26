"use strict";
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
        showItemInCart(index);
        addItemToCart(index);
    });
});
let finalPrice = 0;
let itemsAmount = 0;
function showItemInCart(index) {
    var _a;
    finalPrice += Number((_a = productPrice[index].lastChild) === null || _a === void 0 ? void 0 : _a.nodeValue);
    addToCartButton[index].classList.add('hide');
    addAmount[index].classList.remove('hide');
    itemsAmount += 1;
    if (cartItemsCount && cartItemsCount.lastChild) {
        cartItemsCount.lastChild.nodeValue = itemsAmount.toString();
    }
    const inCartAppear = [inCartImage, inCartP];
    inCartAppear.forEach((e) => e.classList.add('displayNone'));
}
function addItemToCart(index) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('price-for-item');
    const itemName = document.createElement('p');
    itemName.textContent = productName[index].textContent;
    cartItems === null || cartItems === void 0 ? void 0 : cartItems.appendChild(itemName);
    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = '1';
    cartItem.appendChild(itemQuantity);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = productPrice[index].textContent;
    cartItem.appendChild(itemPrice);
    const itemUnderline = document.createElement('span');
    itemUnderline.classList.add('underline');
    cartItem.appendChild(itemUnderline);
    cartItems === null || cartItems === void 0 ? void 0 : cartItems.appendChild(cartItem);
}
