// JavaScript Fundamentals Section II

// Activating Strict mode
"use strict";
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 22;

*/

// Functions in JavaScript
/*
function logger() {
  console.log("My name is Amol");
}

// calling/ running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

/*
function ageCalculator(name, birthYear, currentYear) {
  console.log(name, birthYear, currentYear);
  const age = currentYear - birthYear;
  return (amolSentence = `Hi all I'm ${name} and my birthYear was ${birthYear} and we are present in ${currentYear} and I'm ${age} years old`);
}

const amolAge = ageCalculator("Amol", 2004, 2022);
console.log(amolAge);

*/

// Function   function declaration vs expression

// function declarations

/*
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const amolAge = calcAge1(2004);
console.log(amolAge);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(2002);
console.log(age2);

*/

// arrow function
/*
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retireMent = 65 - age;
  // return retireMent
  return `${firstName} retires in ${retireMent} years`;
};

console.log(yearsUntilRetirement(2004, "Amol"));
console.log(yearsUntilRetirement(1999, "Savan"));
*/

// Function calling another function

/* 
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

*/
// Output: Juice with 8 pieces of apples and 12 pieces of oranges
// Explanation:

/* 
In this code we are first creating a function cutFruitPieces and passing 
an parameter of fruit one fruit. and then returning the fruit times 4
and the function ends.

and in the next function we are creating a function with the function 
declaration and passing two parameters apples and oranges, and we are 
calling the cutFruitPieces in the fruitProcessor function with the arguments
of the fruitProcessor function that means whatever we passed in the 
arguments as apples and oranges it will return the 4 times of that as an
pieces. 

and simply the fruitProcessor function will return the template literal string
with the applePieces and orangesPieces

*/

// Reviewing Functions

/*

const calcAge = function (year) {
  return 2022 - year;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retireMent = 65 - age;
  if (retireMent > 0) {
    console.log(`${firstName} retires in ${retireMent} years`);
    return retireMent;
  } else {
    console.log(`${firstName} has already retires🎉`);
    return -1;
  }
  // return `${firstName} retires in ${retireMent} years`;
};

console.log(yearsUntilRetirement(2004, "Amol"));
console.log(yearsUntilRetirement(1950, "mike"));

*/

/*
// function declaration

function printName(firstName, lastName, job) {
  return `Hello there I'm ${firstName} ${lastName} and I am a ${job}:D`;
}

const name = printName("Amol", "Shelke", "Front End Developer");
console.log(name);

function expression

const printName = function (firstName, lastName, job) {
  return `Hello there I'm ${firstName} ${lastName} and I am a ${job}:D`;
};

const intro = printName("Amol", "Shelke", "Front End Developer");
console.log(intro);

*/
// arrow function
/*
function printName(firstName, lastName, job) {
  return `Hello there I'm ${firstName} ${lastName} and I am a ${job}:D`;
}

const intro2 = printName("Amol", "Shelke", "Front End Developer");
console.log(intro2);

*/
/*
 Back to the two gymnastics temas, the dolphins and the koalas
 there is a ndw gymnastics discipline, which works differently
Each team competes 3 times, and then the average of the 3 scores
is calculated {so one average score per team}

A team only wins if it has at least DOUBLE the average score of the 
other team. OtherWise, no team wins

1. create an arrow function `calcAverage` to calculate the average 
of 3 teams

2. Use the function to calculate the average for both teams

3. Create a function `CheckWinner` that takes the average score
of each team as an parameters {dolphiAvg and koalasAvg} and then logs
the winner to the console.

4. use the checkWinner function to determine the winner for both 
data 1 and data 2 

5. Ignore draws this times ...

TEST DATA 1: Dolphins socre 44, 23, and 71, Koalas 
score 65, 54 and 49

TEST DATA 2: Dolphins score 85, 54, and 41, Koalas 
Score 23, 34,and  27
*/

// Coding Challenge # 1

// test 1

/*

const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3
  return average
}

// test 2
const dolphinAvg = calcAverage(85, 54, 41)
const koalasAvg = calcAverage(23, 34, 27)
console.log(dolphinAvg , koalasAvg)

// test 3

function checkWinner(dolphinAvg, koalasAvg) {
  if (dolphinAvg >= 2 * koalasAvg) {
    console.log(`Dolphis win the game with {${dolphinAvg} vs. ${koalasAvg}}🥳`)
  } else if (koalasAvg >= 2 * dolphinAvg) {
    console.log(`Koalas win the game with {${koalasAvg} vs. ${dolphinAvg}}🥳`)
  } else {
    console.log('Noone wins🥲')
   }
}

// Final solution 
checkWinner(dolphinAvg, koalasAvg)

*/

// Introduction to Arrays

/*
// Without array it would be like this

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Rouls'

// basic way to create a array
const friends = ['Michael', 'Steven', 'Rouls']
console.log(friends)

const y = new Array(1991, 1984, 2006, 2020)
console.log(y)

// axesing the element of the arrays

console.log(friends[0], friends[2])

// we can check the lengt of an array using the length property

console.log(friends.length)
console.log(friends[friends.length -1])

friends[2] = 'jay'
console.log(friends)

// array with the different Data types

const firstName = 'Amol'
const amol = [firstName, 'Shelke', 2022 - 2004, 'FrontEnd Developer', friends ]
console.log(amol)

// Exercise 
const calcAge = function (birthYear) {
  return 2022 - birthYear

}
const years = [2000, 2002, 2004, 2003, 2001]
// we can pass any expressions inside  arrays 
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

*/

// JavaScript methods or array Operations..

/* 

// add Elements 
const friends = ['xxx', 'yyy', 'zzz']
// adds Element at the end 
const newLength = friends.push('ddd')
console.log(friends, newLength)

// friends.unshift('aaa')

// remove Elements 

const popedEl = friends.pop()
console.log(popedEl) 
console.log(friends)

const firstItemPop = friends.shift()
console.log(firstItemPop)

console.log(friends)
console.log(friends.indexOf('zzz'))

// The includes method will check if the passed argument is present in array or not base on the condition it will return true or false
console.log(friends.includes('zzz'))
console.log(friends.includes('abc'))

if (friends.includes('zzz')) {
  console.log('You have a friend called zzz')
}

*/

//  Coding Challenge #2

/* 

Steven is still building his tip calculator, using the same rules as before:
tip 15% of the bill if the bill value is between 50 and 300, and if the value
is different, the tip is 20%

1. Write a function `calcTip` that take any bill value as an input and return 
the corresponding tip, calculated based on the rules above.

2.  and now let's use arrays. So create an array 'bills' containing the test 
data below.

3. Create an array 'tips' containing the tip value for each bill, calculated
from the functio you created before.

4. BONUS: create an array 'total' containg the total values, so the bill + tip.

Test Data = 125, 555, and 44
*/
/*
// Test 1 
function calcTip(bill) {
  if (bill >= 50 && bill < 300) {
   return  bill * .15
  } else
    return bill * .20
}


// Test 2.

const bills = [125, 555, 44]

// Test 3 
const allTips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(allTips)

// Test 4 Bonus

const totalValue = [bills[0] + allTips[0], bills[1] + allTips[1], bills[2] + allTips[2]]
console.log(totalValue)

*/

// Introduction to Objects
/*

const amol = {
  firstName: 'Amol',
  lastName: 'Shelke',
  age: 2022 - 2004,
  job: 'Teacher',
  friends: ['Amol', 'Amol', 'amol']
}

*/
/*
// How do we acces data from objects

const amol = {
  firstName: 'Amol',
  lastName: 'Shelke',
  age: 2022 - 2004,
  job: 'Teacher',
  friends: ['Michael', 'Amol', 'amol']
}

// by DOT notation
/*
console.log(amol.firstName)

// brackets notation
console.log(amol['lastName'])

const nameKey = 'Name'
console.log(amol['first' + nameKey])
console.log(amol['last' + nameKey])

const interestedIn =
  prompt('What do you want to know about amol? Choose between, firstName, LastName, age, job, and friends')

if (amol[interestedIn]) {
  console.log(amol[interestedIn])
} else {
  console.log('Wrong request')
}


// Adding new properties to objects using dot notation and bracket notation
amol.location = 'India'
amol['twitter'] = '@amol_shelke09'
console.log(amol)

// Challenge

// amol has 3 friends, and his best friend is called Michael

console.log(`${amol.firstName} has ${amol.friends.length} friends and his best friend is called ${amol.friends[0]}`)
*/
/*

// Object methods

const amol = {
  firstName: 'Amol',
  lastName: 'shelke',
  birthYear: 2004,
  job: 'Front End developer',
  friends: ['x', 'y', 'z'],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear
  // }

  // calcAge: function () {
  //   // console.log(this)
  //   return 2022 - this.birthYear
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear  
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${amol.job}
    , and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license
    `
  }

}
console.log(amol.calcAge())
console.log(amol.age)

console.log(amol.getSummary()); 

*/

// Coding Challenge #3
/*

Let's go back to Mark and John comparing their BMIs! This time, let's 
use objects to implement the calculations! Remember:
 BMI = mass / height ** 2 = mass / (height * height). 
 (mass in kg and height in meter)

1. For each of them, create an object with properties for their 
full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate
 the BMI (the same method on both objects). Store the BMI value to a property, 
 and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name 
and the respective BMI. Example: "John Smith's BMI (28.3) is higher
 than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. 
 John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀

*/

/*
// solution

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height)
    return this.BMI;
  }

}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height)
    return this.BMI;
  }

}
const markBMI = mark.calcBMI()
const johnBMI = john.calcBMI()

if (markBMI > johnBMI) {
  console.log(`${mark.fullName}'s BMI{${markBMI}} is higher than ${john.fullName}'s BMI {${johnBMI}}`)
} else if(johnBMI > markBMI) {
  console.log(`${john.fullName}'s BMI {${johnBMI}} is higher than ${mark.fullName}'s {${markBMI}}`)
} else {
  console.log('both have same BMI')
}

*/

// Itreation the for loop
/*

// console.log('Lifting weight repitition 1 🏋️‍♂️')
// console.log('Lifting weight repitition 2 🏋️‍♂️')
// console.log('Lifting weight repitition 3 🏋️‍♂️')
// console.log('Lifting weight repitition 4 🏋️‍♂️')
// console.log('Lifting weight repitition 5 🏋️‍♂️')
// console.log('Lifting weight repitition 6 🏋️‍♂️')
// console.log('Lifting weight repitition 7 🏋️‍♂️')
// console.log('Lifting weight repitition 8 🏋️‍♂️')
// console.log('Lifting weight repitition 9 🏋️‍♂️')
// console.log('Lifting weight repitition 10 🏋️‍♂️')

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋️‍♂️`)
}
*/

// Looping Arrays, Breaking and continuing
/*
const amol = ['Amol', 'Shelke', 2022 - 2004, 'FrontEnd Developer',
              ['abc', 'abc', 'xyz'], true]

const types = [];

for (let i = 0; i < amol.length; i++) {
  // reading array 
  console.log(amol[i])
  
  // filling types array
  // types[i] = typeof amol[i]
  types.push(typeof amol[i])

}
console.log(types)

const birthYears = [2002, 2003, 2004, 2000, 2001]
const age = [];

for (let i = 0; i < birthYears.length; i++) {
  const ages = 2022 - birthYears[i]
  age.push(ages)
}

console.log(age) 
*/

/*

// break and continue

const amol = ['Amol', 'Shelke', 2022 - 2004, 'FrontEnd Developer',
              ['abc', 'abc', 'xyz'], true]

for (let i = 0; i < amol.length; i++) {
  if(typeof amol[i] !== 'string') continue
  console.log(amol[i], typeof amol[i])
}

// break

console.log('BREAK WITH NUMBER')
for (let i = 0; i < amol.length; i++) {
  if (typeof amol[i] === 'number') break
  console.log(amol[i])

}
*/
/*
// Looping Backwards and Loops in Loops

const amol = ['Amol', 'Shelke', 2022 - 2004, 'FrontEnd Developer',
  ['abc', 'abc', 'xyz']]
            
for (let i  = amol.length - 1; i >= 0; i--) {
  console.log(amol[i])
}

// loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} lifting weights repitation ${rep}🏋️‍♂️`)
  }
} 
*/

// The while loop
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repitition ${rep} 🏋️‍♂️`)
}

console.log('----------------------------------')

let rep = 1
while (rep <= 10) {
  console.log(`Lifting weight repitition ${rep} 🏋️‍♂️`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)

while (dice != 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end')
}

*/

// Final coding Challenge:

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and 
total values (bill + tip) for every bill value in the bills array. Use a for loop to 
perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the
tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 
'arr' as an argument. This function calculates the average of all numbers
 in the given array. This is a DIFFICULT challenge (we haven't done this 
 before)! Here is how to solve it:

  4.1. First, you will need to add up all values in the array. To do the addition, 
  start by creating a variable 'sum' that starts at 0. Then loop over the array 
  using a for loop. In each iteration, add the current value to the 'sum' variable. 
  This way, by the end of the loop, you have all values added together

  4.2. To calculate the average, divide the sum you calculated before by the
   length of the array (because that's the number of elements)
  
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀

*/

// Final Solution
/*

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52]
const tips = []
const totals = []

function calcTip(bill) {
  if (bill >= 50 && bill < 300) {
   return  bill * .15
  } else
    return bill * .20
}

for (let i = 0; i < bills.length; i++) {
  const tip = (calcTip(bills[i]))
  tips.push(tip)
  const total = bills[i] + calcTip(bills[i])
  totals.push(total)
}

console.log(bills, tips, totals)

*/