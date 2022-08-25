'use srtict';
// importing modules

// console.log(shippingCost);

// addTo('potato', 12);
// console.log(product, tq);
console.log('Importing module');
// import { addTo, totalProduct as product, tq } from './shoppingChart.js';

// import * as Shoppingcart from './shoppingChart.js';
// Shoppingcart.addTo('bread', 5);
// console.log(Shoppingcart.totalProduct);

// import add, { cart } from './shoppingChart.js';
// add('pizza', 2);
// add('tomato', 2);
// add('potato', 2);

// console.log(cart);

// console.log('starting fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // not very clear
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////////////////
// const Shoppingcart2 = (function () {
//   const cart = [];
//   const shoppingChart = 10;
//   const totalQuantity = 37;
//   const totalPrice = 237;

//   const addTo = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shopping cost is ${shoppingChart})`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} order from supplier`);
//   };

//   return {
//     addTo,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// Shoppingcart2.addTo('pizza', 2);
// Shoppingcart2.addTo('tomato', 4);
// console.log(Shoppingcart2);

/////////////////////////////////////////////////

// Export
// export.addTo = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart`
//   );
// };

// // Import
// const {addTo} = require('./shoppingChart.js')

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'pizza', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${name}`);
  }
}
const ahmed = new Person('ahmed');

console.log(state.cart.find(el => el.quantity >= 2));

import 'core-js/stable';
import 'regenerator-runtime/runtime';
