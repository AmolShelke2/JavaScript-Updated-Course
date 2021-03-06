'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Amol Shelke',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// Creating DOM Elements
const displayMoveMents = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}???</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}???`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

const updatUI = function (acc) {
  // Display movements
  displayMoveMents(acc.movements);

  // display balance
  calcDisplayBalance(currentAccount);

  // display summmary
  calcDisplaySummary(currentAccount);

  console.log('LOGIN');
};

// Event Listener
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updatUI(currentAccount);
  }
});

// Implementing transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    // reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // console.log('Transfer Valid');

    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // update UI
    updatUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Update the UI
    updatUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

// The findIndex() method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // .indexOf(23)

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMoveMents(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// shallow copy
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(' - '));

*/
/*
// Looping Arrays with forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`MoveMent ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`MoveMent ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('-------------------');

movements.forEach(function (mov, i, arr) {
  //   if (mov > 0) {
  //     console.log(`You deposited ${mov}`);
  //   } else {
  //     console.log(`You withdraw ${Math.abs(mov)}`);
  //   }

  if (mov > 0) {
    console.log(`moveMent ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`moveMent ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
*/

/*
// forEach with Maps and sets
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

// Project Bankist_app

// ////////

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about
 their dog's age, and stored the data into an array (one array for each).
  For now, they are just interested in knowing whether a dog is an adult or a puppy.
   A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO
 dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
  and remove the cat ages from that copied array (because it's a bad practice 
  to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult
 ("Dog number 1 is an adult, and is 5 years old") 
 or a puppy ("Dog number 2 is still a puppy ????")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far ????

TEST DATA 1: Julia's data [3, 5, 2, 12, 7],
 Kate's data [4, 1, 15, 8, 3]

TEST DATA 2: Julia's data [9, 16, 6, 8, 3],
 Kate's data [10, 5, 6, 1, 4]

GOOD LUCK ????
*/

//  Solution
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const copyJulia = [...dogsJulia];
  const correctedJulia = copyJulia.slice(1, -2);
  const correctedData = correctedJulia.concat(dogsKate);
  //   for (const [i, item] of correctedData.entries()) {
  //     if (item >= 3) {
  //       console.log(`Dog Number ${i + 1} is a Dog????`);
  //     } else {
  //       console.log(`Dog Number ${i + 1} is still a puppy????`);
  //     }
  //   }

  // ForEach
  correctedData.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog Number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog Number ${i + 1} is still a puppy????`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Data transformation map, filter, reduce

// Map

/* 
Maps return a new array containing the results of applying the results
an operation on all original array Element
*/

// Filter

/* 

Filter returns a new array containing the array elements that passed 
a specified test condition.

*/

// Reduce

/*

reduce boils('reduces') all array elements down to one single value
(eg. adding all elements together)

*/

// The Map Method in practise
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

// Exercise try to rewrite the function in arrow
const moveMentsUSD = movements.map(mov => {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUsd);

//
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `moveMent ${i + 1}: You deposited ${mov}`;
  } else {
    return `moveMent ${i + 1}: You withdraw ${Math.abs(mov)}`;
  }
});

console.log(movementsDescription);
*/

// Filter
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

// Exercise Create a array for withdrawals
const withdrawls = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawls);

// also with for of loop
const withdrawlsFor = [];
for (const withdrw of movements) {
  if (withdrw < 0) withdrawlsFor.push(withdrw);
}
console.log(withdrawlsFor);
*/

// Reduce Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Accumulator -> Snowball

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
  console.log(balanceFor);
}

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);

console.log(max);
*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
 dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages
 ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if 
the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
 humanAge = 16 + dogAge * 4. 

2. Exclude all dogs that are less than 18 human years old (which is the same
   as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already
   know from other challenges how we calculate averages ????)

4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK ????
*/

// Solution
/*
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(function (dogAge) {
    if (dogAge <= 2) {
      return dogAge * 2;
    } else return 16 + dogAge * 4;
  });
  const adultAges = humanAges.filter(function (dogAge) {
    return dogAge >= 18;
  });
  console.log(humanAges, adultAges);

  const average = adultAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(average1, average2);
*/
// The Magic of Chaning methods
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const totalDeposit = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeposit);
*/

// Coding Challenge #3

/* 

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this 
time as an arrow function, and using chaining

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const calcAverageHumanAgeArrow = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

*/

// The find method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);
console.log(movements);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Try to implement this functionality using the for of loop

for (const accFor of accounts) {
  if (accFor.owner === 'Jessica Davis') {
    console.log(accFor);
  }
}

const accountMap = accounts.map(function (acc) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
});
*/

// Some and Every method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(450));

// Condition
console.log(movements.some(mov => mov === -130));

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
*/

// flat and flatMap method
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [[4, [5, 6]]], 7, 8];
console.log(arrDeep.flat(3));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// flat

const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

// flatMaps
const overAllBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

*/

// Sorting Arrays
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// strings
const owners = ['jonas', 'amol', 'stan', 'nsb'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Assecending order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements);

// const arr = [11, 2, 23, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);
*/

/*
// More ways of creating and filling Arrays

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(new Array(1, 2, 3, 4, 5, 6));

// Generates Array Programically
const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

// fill method
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('???', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

*/

// Array Methods in practise
/*

// 1.

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositSum);

// 2.

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposit1000);

// Prefix ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3

const { deposits, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sums;
    },
    { deposits: 0, withdrawls: 0 }
  );

console.log(deposits, withdrawls);

console.log(accounts);
const flatAccount = accounts.flatMap(acc => acc.movements);
console.log(flatAccount);

const mapOwners = accounts.map(acc => acc.owner);
console.log(mapOwners);

const flatOwners = accounts.flatMap(acc => acc.owner);
console.log(flatOwners);

// 4

// This is a nice title -> This Is a Nice Title

const converTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(converTitleCase('this is a nice title'));
console.log(converTitleCase('this is a LONG titles'));
console.log(converTitleCase('and here is another title with an EXAMPLE'));
*/

// Final Coding Challenge

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if 
dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the
 recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within 
a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, 
calculate the recommended food portion and add it to the object as a 
new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
  food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much 
or too little. HINT: Some dogs have multiple owners, so you first need to
 find Sarah in the owners array, and so this one is a bit tricky (on purpose) ????

3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat 
too little ('ownersEatTooLittle').

4. Log a string to the console for each array created 
in 3., like this: "Matilda and Alice and Bob's dogs eat
 too much!" and "Sarah and John and Michael's dogs eat too 
 little!"

5. Log to the console whether there is any dog eating EXACTLY the
 amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating 
an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY 
amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended 
food portion in an ascending order (keep in mind that the portions are
   inside the array's objects)
  

HINT 1: Use many different tools to solve these challenges, you 
can use the summary lecture to choose between them ????

HINT 2: Being within a range 10% above and below the recommended portion 
means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the 
recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK ????
*/

// Solution
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Test case 1
const recommendedFood = dogs.forEach(dog => {
  dog.recomendFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// Test case 2
const findSarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(findSarahDog);
console.log(
  `Sarah's dog is eating too ${
    findSarahDog.curFood > findSarahDog.recomendFood ? 'much' : 'little'
  } food`
);

// Test case 3

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// OwnersEatTooMuch

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

// Test case 4
console.log(`${ownersEatTooLittle.join(' and ')} dog's eats to little`);
console.log(`${ownersEatTooMuch.join(' and ')} dog's eats to Much`);

// test case 5

const ownersEatTooSame = dogs.filter(dog => dog.curFood === dog.recomendFood);
console.log(ownersEatTooSame);

// test case 6

// Eating an okay amount means the dog's current food portion is within
// a range 10% above and 10% below the recommended portion (see hint).

const checkOkayAmount = dog =>
  dogs.curFood > dogs.recomendFood * 0.9 &&
  dogs.curFood < dogs.recomendFood * 1.1;

console.log(dogs.some(checkOkayAmount));

// Test case 7

const okayAmount = [];
okayAmount.push(dogs.some(checkOkayAmount));
console.log(okayAmount);

*/
