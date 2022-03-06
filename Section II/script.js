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

const amol = {
  firstName: 'Amol',
  lastName: 'Shelke',
  age: 2022 - 2004,
  job: 'Teacher',
  friends: ['Amol', 'Amol', 'amol']
}