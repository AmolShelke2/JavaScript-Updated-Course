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
