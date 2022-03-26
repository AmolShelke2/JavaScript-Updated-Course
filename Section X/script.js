'use strict';

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
