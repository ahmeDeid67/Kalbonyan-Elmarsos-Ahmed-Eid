// exporting modules
'use strict';
console.log('Exporting module');

// Blockingg code
console.log('Start Fetching user');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching user');

const shippingCost = 10;
export const cart = [];

export const addTo = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalQuantity = 237;
const totalProduct = 23;

export { totalProduct, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
