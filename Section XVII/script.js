// Importing and exporting Modules.

// import './clean.js';
// import { addToCart, calcAge, totalPrice as price, QT } from './clean.js';

// console.log('Importing Module');
// addToCart('bread', 5);

// calcAge(2004, 2021);

// console.log(price, QT);

console.log('Importing Module');

// import * as ShoppingCart from './clean.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// default exports

// import add, { addToCart, calcAge, totalPrice as price, QT } from './clean.js';
// console.log(price)

import add, { cart, printGreeting } from './clean.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);
console.log(cart);

printGreeting('Amol', 17, 'Software Engineer');

// Module pattern
