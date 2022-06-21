// It is my solution
'use strict';

var budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value = 10000;

const spendingLimit = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// spendingLimit.jay = 200;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimit, 100, 'Pizza');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimit,
  100,
  'Going to movies',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimit, 200, 'stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (let entry of budget) {
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
//   // }
// };

const checkExpenses2 = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses2(newBudget3, spendingLimit);
console.log(finalBudget);

const LogbigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}, ''`);
  console.log(bigExpenses);

  //   let output = '';
  //   for (const entry of budget)
  //     if (entry.value <= -bigLimit) output += entry.description.slice(-2) + ' / ';
  //   output = output.slice(0, -2);
  //   console.log(output);
};

LogbigExpenses(finalBudget, 500);

// Learnt Declarative and functional javascript principles

// Let's fix some bad code part 2
