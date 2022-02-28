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
