// It is my solution

var budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const limits = {
  jonas: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  let limit;

  limits[user] ? (limit = limits[user]) : (limit = 0);

  if (value <= limit) budget.push({ value: -value, description, user });
};

addExpense(10, 'Pizza');
addExpense(100, 'Going to movies', 'Matilda');
addExpense(200, 'stuff', 'Jay');

console.log(budget);

const checkExpenses = function () {
  for (let entry of budget) {
    let limit;
    if (limits[entry.user]) {
      limit = limits[entry.user];
    }
    limit = 0;

    limits[entry.user] ? (limit = limits[entry.user]) : (limit = 0);
    if (entry.value < -limit) entry.flag = 'limit';
  }
};

checkExpenses();
console.log(budget);

const LogbigExpenses = function (bigLimit) {
  let output = '';

  for (const entry of budget)
    if (entry.value <= -bigLimit) output += entry.description.slice(-2) + ' / ';

  output = output.slice(0, -2);
  console.log(output);
};

// Learnt Declarative and functional javascript principles

// Let's fix some bad code part 2
