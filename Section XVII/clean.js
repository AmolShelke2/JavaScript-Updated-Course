// Exporting module

console.log('Exporting Module');

const shipingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

export const calcAge = function (birthYear, currentYear) {
  const age = currentYear - birthYear;
  console.log(`You are ${age} year old`);
};

const totalPrice = 222;
const totalQuantity = 22;

export { totalPrice, totalQuantity as QT };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

const printGreeting = function (name, age, job) {
  console.log(`Hey, I'm ${name} and I'm ${age} year old ${job}`);
};

export { printGreeting };
