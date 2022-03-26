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
