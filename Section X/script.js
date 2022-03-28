'use strict';
/*
// Default parameter

const bookings = [];

const createBooking = function (flightNum, numPassenger = 1, price = 199) {
  // Es5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('Lauda', 2, 1000);
createBooking('LH124', undefined, 1000);

*/

// How passing Arguments works values vs refrence.
/*
const flight = 'LH234';
const Amol = {
  name: 'Amol Shelke',
  passPort: 696969969696,
};

const checkIn = function (flightNum, Passenger) {
  flightNum = 'LH999';

  Passenger.name = 'Mr. ' + Passenger.name;
  if (Passenger.passPort === 696969969696) {
    alert('Checked In');
  } else {
    alert('Wrong PassPort');
  }
};

// checkIn(flight, Amol);
// console.log(flight);
// console.log(Amol);

// Is the same as doing...
// const flightNum = flight;
// const Passenger = Amol;

const newPassPort = function (person) {
  person.passPort = Math.trunc(Math.random() * 1000000);
};

newPassPort(Amol);
checkIn(flight, Amol);

*/

// First class function and Higher order function

// first class function

/*

JavaScript treats functions as first-class citizens
this means that function are simply values
functions are just another type of Object

Store functions in variables or properties

const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

Pass Functions as arguments to other function

const greet = () => console.log('Hello MF');
btnClose.addEventListener('click', greet);

// Return function from function

// Call methods on function
*/

////////////////////////////////
// Higher Order function

/*
A function that recives another function as an argument, that
returns a new function or both

This is only happened because of first class function

const greet = () => console.log('Hello MF');
btnClose.addEventListener('click', greet);

function that returns new function

function count() {
    let counter = 0
    return function() {
      counter++
    }
}
*/

// Function accepting callBack functions

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transform by: ${fn.name}`);
};

transformer('javaScript is the best!', upperFirstWord);
transformer('javaScript is the best!', oneWord);

// JS USES CALLBACK ALL THE TIME

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['amol', 'shelke', 'bcca', 'sde'].forEach(high5);

*/

// function returning function
/*

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hiee👋');
greeterHey('Amol');
greeterHey('Jonas');

greet('Hello')('Jonas');

// Example

const calC = function (num1) {
  return function (num2) {
    console.log(num1 + num2);
  };
};

const addition = calC(19);
addition(19);
calC(18)(18);

// Challenge try to rewrite the function with arrow function

const greetArrow = greeting => {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetMsg = greetArrow('Heello');
greetMsg('Amol');
*/

// The call and apply methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(699, 'Amol');
lufthansa.book(199, 'Jonas');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does Not work
// book(23, 'Amol Shelke')

// call method
book.call(eurowings, 23, 'Sarah williams');
console.log(eurowings);

book.call(lufthansa, 235, 'Marry cooper');

const india = {
  airline: 'Emirates',
  iataCode: 'BC',
  bookings: [],
};

book.call(india, 124, 'Amol Shelke');

// Aplly methods
const flightData = [583, 'George cooper'];
book.apply(india, flightData);

book.call(india, ...flightData);

*/

// The Bind method
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);

bookEW(23, 'Amol Shelke');

const bookEw23 = book.bind(eurowings, 23);
bookEw23('Amol Shelke');
bookEw23('Amol Shelke2');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVaI = addTax.bind(null, 0.18);
// addVat = value => value + value * .18

console.log(addVaI(200));
// console.log(addVaI(28));

// Challenge Rewrite the function with the technique function returning

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVaII = addTax2(0.18);
console.log(addVaII(28));
console.log(addVaII(200));

*/

// Coding challenge 1

///////////////////////////////////////
// Coding Challenge #1

/* 

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. This data is stored
 in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll'
 object. The method does 2 things:

  1.1. Display a prompt window for the user to input the number
   of the selected option. The prompt should look like this:

        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  
      1.2. Based on the input number, update the answers array. 
  For example, if the option is 3, increase the value AT POSITION 3 
  of the array by 1. Make sure to check if the input is a number and 
  if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be either
 'string' or 'array'. If type is 'array', simply display the results array as it is,
  using console.log(). This should be the default option. If type is 'string', display a
   string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the 
test data. Use both the 'array' and the 'string' option. Do NOT put the arrays 
in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // this generates [0, 0, 0, 0,]
  answers: new Array(4).fill(0),
};
