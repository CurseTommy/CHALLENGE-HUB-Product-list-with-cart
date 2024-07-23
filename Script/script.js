'use strict';

// Obsługa produktu
const addToCartButton = document.querySelectorAll('.add-to-cart');
const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');
const productPrice = document.querySelectorAll('.price');
const productName = document.querySelectorAll('.big-product-text');

// Obsługa koszyka
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('#cart-items-cout');

console.log(productPrice, productName, addToCartButton, cartItems);

let finalPrice = 0;
let itemsAmount = 0;

addToCartButton.forEach((e, index) => {
	e.addEventListener('click', function () {
		addToCart(index);
	});
});

function addToCart(index) {
	finalPrice += Number(productPrice[index].lastChild.nodeValue);
	const nameP = productName[index].firstChild.nodeValue;
	itemsAmount += 1;
	cartItems.lastChild.nodeValue = itemsAmount;
	console.log(index, finalPrice, nameP);
}
