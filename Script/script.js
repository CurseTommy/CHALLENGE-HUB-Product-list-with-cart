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
    productPrice[index].lastChild
        ? (finalPrice += Number(productPrice[index].lastChild.nodeValue))
        : 0;
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
    cartItems.appendChild(itemName);
    const itemQuantity = document.createElement('p');
    itemQuantity.textContent = '1';
    cartItem.appendChild(itemQuantity);
    const itemPrice = document.createElement('p');
    itemPrice.textContent = productPrice[index].textContent;
    cartItem.appendChild(itemPrice);
    const itemUnderline = document.createElement('span');
    itemUnderline.classList.add('underline');
    cartItem.appendChild(itemUnderline);
    cartItems.appendChild(cartItem);
}
