const addToCartButton = document.querySelectorAll('.add-to-cart');
const increment = document.querySelectorAll('.increment');
const decrement = document.querySelectorAll('.decrement');
const productPrice = document.querySelectorAll('.price');
const productName = document.querySelectorAll('.big-product-text');

const cartItemsCount = document.querySelector('#cart-items-cout');
const cartItems = document.querySelector('.cart-items') as HTMLElement;
const addAmount = document.querySelectorAll('.add-amount');
const inCartImage = document.querySelector('.in-cart-image') as HTMLElement;
const inCartP = document.querySelector('#in-cart-p') as HTMLElement;

addToCartButton.forEach((e: Element, index: number) => {
	e.addEventListener('click', function () {
		showItemInCart(index);
		addItemToCart(index);
	});
});
let finalPrice: number = 0;
let itemsAmount: number = 0;

function showItemInCart(index: number): void {
	// Total value of the cart
	productPrice[index].lastChild
		? (finalPrice += Number(productPrice[index].lastChild.nodeValue))
		: 0;

	// Hide, append amount handler button
	addToCartButton[index].classList.add('hide');
	addAmount[index].classList.remove('hide');

	// Amount of cart items
	itemsAmount += 1;
	if (cartItemsCount && cartItemsCount.lastChild) {
		cartItemsCount.lastChild.nodeValue = itemsAmount.toString();
	}

	// Hide empty cart graphic and txt
	const inCartAppear: [HTMLElement, HTMLElement] = [inCartImage, inCartP];
	inCartAppear.forEach((e): void => e.classList.add('displayNone'));
}

function addItemToCart(index: number): void {
	// Create a new div for the cart item
	const cartItem: HTMLElement = document.createElement('div');
	cartItem.classList.add('price-for-item');

	// Add product name
	const itemName: HTMLElement = document.createElement('p');
	itemName.textContent = productName[index].textContent;
	cartItems.appendChild(itemName);

	// Add product quantity
	const itemQuantity: HTMLElement = document.createElement('p');
	itemQuantity.textContent = '1';
	cartItem.appendChild(itemQuantity);

	// Add product price
	const itemPrice: HTMLElement = document.createElement('p');
	itemPrice.textContent = productPrice[index].textContent;
	cartItem.appendChild(itemPrice);

	// Underline
	const itemUnderline: HTMLElement = document.createElement('span');
	itemUnderline.classList.add('underline');
	cartItem.appendChild(itemUnderline);

	// Append the new cart item to the cartItems container
	cartItems.appendChild(cartItem);
}
