// Importing and exporting Modules.

import './shopingCart.js';
import { addToCart, calcAge, totalPrice as price, QT } from './shopingCart.js';

console.log('Importing Module');
addToCart('bread', 5);

calcAge(2004, 2021);

console.log(price, QT);

console.log('Importing Module');

import * as ShoppingCart from './shopingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// default exports

// import add, { calcAge, totalPrice as price, QT } from './shopingCart.js';
// console.log(price);

import add, { cart, printGreeting } from './shopingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);
console.log(cart);

printGreeting('Amol', 17, 'Software Engineer');

// Module pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 245;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();


ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

// CommonJS modules

// Export
/*
 export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
};
  
// Import

const { addToCart } = require('./clean.js')
*/

// Introduction to NPM

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 4 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);

stateClone.user.loggedIn = false;

console.log(stateDeepClone);

// Bundelling with parcel and NPM scripts.

if (module.hot) {
  module.hot.accept();
}

// configuring babel and polyfilling

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const amol = new Person('Amol');

console.log('Amol' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find';

// polyfilling async function
import 'regenerator-runtime/runtime';
