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

// function declaration

/*
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

arrow function

const printName = (firstName, lastName, job) => {
  return `Hello there I'm ${firstName} ${lastName} and I am a ${job}:D`;
};

const intro2 = printName("Amol", "Shelke", "Front End Developer");
console.log(intro2);

*/
