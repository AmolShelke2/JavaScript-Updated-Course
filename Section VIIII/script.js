"use strict";

// Destructing arrays
/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelor Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Carpse Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a, b, c)

// destructuring

const [x, y, z] = arr
console.log(x, y, z)

let [main, , secondary] = restaurant.categories
console.log(main, secondary)

// Simple way
 
// switching variables
const temp = main
main = secondary
secondary = temp
console.log(main, secondary)

// [main, secondary] = [secondary, main]
// console.log(main, secondary)


// recive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

// nested desturucturing

const nested = [2, 4, [5, 6]];
// const [i, ,  j] = nested
// console.log(i, j)

const [i, ,  [j, k]] = nested
console.log(i, j, k)

// Default values
const [p=1, q=1, r=1] = [8] 
console.log(p, q, r)

*/

// Destructuring Objects
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelor Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carpse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags)

// Default values

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters)

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  fri: { open, close },
} = openingHours;

console.log(`Open: ${open} Close: ${close}`);
*/

// The Spread Operator
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelor Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carpse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(newArr); // otuput [1, 2, 7, 8, 9]
console.log(...newArr); // output 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays, strings, maps, sets, NOT objects

const str = "Amol";
const letters = [...str, "", "S."];

console.log(letters);
console.log(...str);
// console.log(`${...str}`) // it will show an error because

// Real world example

// const ingredients = [
//   prompt("Lets make pasta! Ingredient 1"),
//   prompt("Ingredients 2"),
//   prompt("Ingredients 3"),
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Old way

// restaurant.orderPasta(...ingredients); // With ES6 Spread Operator

// Objects copy with spread operator
const newRestaurant = {
  ...restaurant,
  founder: "Amol Shelke",
  founded: 1998,
  name: "Amols Restaurant",
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Amols restaurant";
console.log("OLD ONE:", restaurant.name);
console.log("NEW ONE:", restaurantCopy.name);

*/

// Rest Patterns and Parameters
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelor Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carpse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// Spread, Because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on left side 0f =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , risotto, ...otheFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, risotto, otheFood);

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(1, 2, 3, 4, 5, 6);

const x = [22, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "cheese", "olives", "Spimach");
restaurant.orderPizza("mushrooms");
*/

// Short Circutting(&& and _)

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelor Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carpse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

// Use any data type, return ANY data type, short-circuting

/*
console.log("---- OR ------");

console.log(3 || "AMOL"); // 3
console.log("", "Amol"); // Amol
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.nameGuests = 0;

const guests1 = restaurant.nameGuests ? restaurant.nameGuests : 10;
console.log(guests1);

const guests2 = restaurant.nameGuests || 10;
console.log(guests2);

console.log("--- AND ----");

console.log(0 && "AMOL");
console.log(7 && "Amol");

console.log("Hello" && 22 && null && "Amol");

// practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushroom", "cheese");
}

restaurant.order && restaurant.orderPizza("mushroom", "Cheese");

*/

// The Nullish Coalescing operator

/*
restaurant.nameGuests = 0;

const guests = restaurant.nameGuests ? restaurant.nameGuests : 10;
console.log(guests);

// NULLISH: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.nameGuests ?? 10;
console.log(guestCorrect);

*/

// CODING CHALLENGE #1

/* 

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players.
 So create a new array ('players1Final') containing all the original team1 players 
 plus 'Thiago', 'Coutinho' and 'Perisic'


5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names 
(NOT an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console
 which team is more likely to win, WITHOUT using an if/else statement or the 
 ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function 
again with players from game.scored

GOOD LUCK 😀
*/

// SOlution
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
const [player1, player2] = game.players;
console.log(player1, player2);

// Task 2
const [gk, ...playersField] = player1;
console.log(gk, playersField);

// Task 3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Task 4
const players1Final = [...player1, "thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Task 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// Task 6

const PrintGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

PrintGoals("Davies", "Muller", "Lewandowski", "Kimmich");
PrintGoals(...game.scored);

// Task 7
team1 < team2 && console.log("Team 1 is likely to win the game");
team1 > team2 && console.log("Team 2 is likely to win the game");
*/

//  Looping Arrays The for-Of-loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(menu.entries()); 

*/
/*
// Enhanced Object Literals

const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// computing values

const hours = {
  [weekDays[3]]: {
    open: 11,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelor Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Carpse Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  hours,

  // openingHours: openingHours, // old way

  // old way of writing methods

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // ES6 way of writing methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

*/

/*
// Optional chaining

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// without optional chaining
// console.log(restaurant.openingHours.mon.open); // Cannot read properties of undefined

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open);

// Example;
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, We open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRosito?.(0, 1) ?? "Method does not exist");

// Arrays

const users = [{ name: "Amol", email: ".com" }];
console.log(users[0]?.name ?? "user array empty");
*/

/*
// Looping Objects Object keys, values and entries

// properties name

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(restaurant.openingHours);
// console.log(values);

// entries
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal
 number (Example: "Goal 1: Lewanddowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate 
  averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw").
 HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as 
properties, and the number of goals as the value. In this game, it will look like this:

      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*

// Solution

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Task 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// Task 3
for (const [team, draw] of Object.entries(game.odds)) {
  // console.log(team, draw);
  const message = team === "x" ? `draw` : `Victory ${game[team]};`;
  console.log(`Odd of ${message} ${draw}`);
}

*/

/*

// Learning Sets

const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pizza"]);
console.log(ordersSet);

console.log(new Set("amol"));

console.log(ordersSet.size);

// checking if a certain element is present in set or not
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

// Adding element to the set
ordersSet.add("Garlic Bread");

// Removing element from the set
ordersSet.delete("Pizza");

console.log(ordersSet);
console.log(ordersSet[0]);

// Looping sets
for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

*/

// Maps Fundamentals
/*
const rest = new Map();
console.log(rest);
rest.set("name", "Amol Restaurant");

rest.set(1, "Congress Nagar");
console.log(rest.set(2, "Chatrapti square"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
// console.log(rest.get(true));

const time = 20;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
rest.set([1, 2], "Test");
console.log(rest);
console.log(rest.size);
rest.clear();
// console.log(rest);
console.log(rest.get([1, 2]));

rest.set(document.querySelector("h2", "Heading"));
console.log(rest);

*/

/*

// Maps Iteration

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct answer🥳"],
  [false, "Try again"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

// iteration
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// Quiz: try to print the succes message or unsuccess
// const answer = Number(prompt("Your answer"));
const answer = 3;

console.log(answer);
console.log(question.get(answer));

// My solution
console.log(answer === 3 ? question.get(true) : question.get(false));

// Jonas solution
console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

*/

// Summary which Data structures to use
