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

const spendingLimit = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimit?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  //   const limit = spendingLimit[user] ? spendingLimit[user] : 0;

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};

checkExpenses();

console.log(budget);

const LogbigExpenses = function (bigLimit) {
  let output = '';
  for (const el of budget)
    output += el.value <= -bigLimit ? el.description.slice(-2) + ' / ' : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

LogbigExpenses(10000);
LogbigExpenses(100);
