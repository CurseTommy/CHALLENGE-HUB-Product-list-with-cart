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

// console.log(
// 	productPrice,
// 	productName,
// 	addToCartButton,
// 	cartItems,
// 	addAmount,
// 	inCartP
// );

/**
 * Adds event listeners to all elements with the 'add-to-cart' class, which will call the `addToCart` function with the index of the clicked element when clicked.
 */
addToCartButton.forEach((e, index) => {
	e.addEventListener('click', function () {
		addToCart(index);
	});
});

let finalPrice = 0;
let itemsAmount = 0;
/**
 * Adds a product to the cart, updating the cart items count, displaying the "in cart" message, and creating a new cart item.
 *
 * @param {number} index - The index of the product being added to the cart.
 */

function addToCart(index) {
	// Total value of the cart
	finalPrice += Number(productPrice[index].lastChild.nodeValue);

	// Hide, append amount handler button
	addToCartButton[index].classList.add('hide');
	addAmount[index].classList.remove('hide');

	// Amount of cart items
	itemsAmount += 1;
	cartItemsCount.lastChild.nodeValue = itemsAmount;

	// Hide empty cart graphic and txt
	const inCartAppear = [inCartImage, inCartP];
	inCartAppear.forEach((e) => e.classList.add('displayNone'));

	// Create a new div for the cart item
	const cartItem = document.createElement('div');
	cartItem.classList.add('cart-item');

	// Add product name
	const itemName = document.createElement('p');
	itemName.textContent = productName[index].textContent;
	cartItem.appendChild(itemName);

	// Add price
	const itemPrice = document.createElement('p');
	itemPrice.textContent = productPrice[index].textContent;
	cartItem.appendChild(itemPrice);

	// Append the new cart item to the cartItems container
	cartItems.appendChild(cartItem);
}
