'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Amol Shelke',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-04-04T17:01:17.194Z',
    '2022-04-06T23:36:17.929Z',
    '2022-04-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}-${month}-${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
       <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call Print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
  };
  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// ////////////////
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}-${month}-${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset The Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset The Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers
/*
console.log(23 === 23.0); // True

// Base 10 - 0 to 9, 1/10 = 0.1 3/10 = 3.33333333
// Binary base 2 - 0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Strings to Number
console.log(Number('23')); // Number
console.log(+'23'); // Same

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e24', 10));

console.log(Number.parseInt(' 2.5rem '));
console.log(Number.parseFloat(' 2.5rem   '));

// Parsing with float
console.log(Number.parseFloat(`2.5rem`));
console.log(Number.parseFloat('   2.3'));
console.log(parseFloat('2.4rem'));

// Check if value is NAN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(isFinite(20));
console.log(isFinite(+'20XS'));
console.log(isFinite(23 / 0));

// checking if value is integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

*/

// Math & Rounding
/*
// sqrt Returns the square root of a number.
console.log(Math.sqrt(64));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// Max Returns the larger of a set of supplied numeric expressions.
console.log(Math.max(5, 15, 13, 53, 69));
console.log(Math.max(23, 24, 5, '54')); // Does type coercion
console.log(Math.max(6, 18, '23px', 11, 21)); // does not parsing

// MIN  Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1, 2, 0, 13, 5, 4));

//Math Pi
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random
// console.log(Math.trunc(Math.random() * 6) + 1);

const randomINt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 --> 0...(max - min) -> min...max
// console.log(randomINt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.8));

console.log(Math.ceil(25.7));
console.log(Math.ceil(23.2));

console.log(Math.floor(24.5));
console.log(Math.floor(22.2));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding Decimals
console.log((2.5).toFixed(0));
console.log((2.5).toFixed(4));
console.log(+(2.245).toFixed(2));
*/

/*
// The Remainder operator

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 0);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(10));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0 2 4 6 8
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
    // 1 3 5 7 9
  });
});
// Nth time
*/

//  Working with BigInt
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

const bigINt = 4444444444444434444442423243434343434343434344343434n;
console.log(typeof bigINt, bigINt); // bigint

console.log(BigInt(44444444444));

// Operations
console.log(10000n + 10000n);

const huge = 33888488483838383838383838383n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions logical and comparison
console.log(20n > 18);
console.log(20n === 20);

console.log(typeof 20n);
console.log(20n == 20);

// Strings
console.log(huge + ' is REALLY BIG');

// DIVISIONS

console.log(11n / 3n);
console.log(10 / 3);
*/

// Creating Dates

/*
const now = new Date();
console.log(now);

console.log(new Date('Apr 9 2022 11:51:40'));
console.log(new Date('December 24, 2022'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2023, 10, 19, 15, 23, 5));
console.log(new Date(2023, 10, 19, 15, 23, 5));
console.log(new Date(2023, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// Working with Dates
const future = new Date(3 * 24 * 60 * 60);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(259200));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

*/

// Operations with Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2022, 3, 14), new Date(2022, 3, 24));
console.log(days1);
*/

// Internationalizing Numbers(intl)

/*
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

// Basic formating with Numbers

const num = 3884764.23;

console.log('In: ', new Intl.NumberFormat('en-IN', options).format(num));
console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log('UK:    ', new Intl.NumberFormat('en-Uk', options).format(num));

console.log(
  navigator.language,
  '--------',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

// Timers_SetTimeOut and setInterval
/*
// setTimeOut
const ingredients = ['olives', ' '];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}????`),
  3000,
  ...ingredients
);
console.log('waiting for 3 seconds to get pizza'); // this string will logged first after 3 seconds the setTimeout will executes

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

// setInterval

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

*/

// ////////////////
// FINAL COMPLETE
