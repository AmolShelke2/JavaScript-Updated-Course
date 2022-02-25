// JavaScript basics fundamentals section 1

// logging hello world to the console

/*
alert("hello world");

// some basics parts

let js = "amazing";

if (js === "amazing") alert("JavaScript is FUN");

40 + 5 + 24 - 10; // it will don't give any results because we don't put the console.log() here

console.log(40 + 5 + 10 - 20); // this is how we can take the output from any code to the console

*/

/** values and variable  **/
/*
console.log("AMol");
console.log(24);

// we can store the value in a variable like this now what we did here is we just
// store the name AMOL in the firstName variable now we can log it to the console using the variable name

let firstName = "Amol";
console.log(firstName);

// Naming conventions and some styles to write variable name

// in above code we are using the camelCase it is the most useable naming styles that every
// developers use most in this style we have to write the first word in small case and the next one in capital

*/

// Object and primitive

// primitive data types

// ways to declare variables in javaScript let, const, var
/*

let age = 40;
age = 32; // reasigning a value

const birthYear = 2005;
birthYear = 222;

var fullAge = 18
fullAge = 17

*/

// Basic operator

// mathematical operator
// Minus operator
/*
const currentYear = 2022;

const ageAmol = currentYear - 2004;
const ageSarah = currentYear - 2003;

console.log(ageAmol, ageSarah);

// plus operator

console.log(ageAmol + ageSarah);

const firstName = 'Amol';
const lastName = 'Shelke';
console.log(firstName + ' ' + lastName);

// Multiplication operator

console.log(ageAmol * ageAmol);

// division operator

console.log(currentYear / ageAmol);
*/

// Assignment operator
/*
let x = 20 - 2; // 18
x += 10; // x = x + 10 = 28
x *= 2; // x = x * 2 = 56
x++; // x = x + 1 = 57
x--; // x = x - 1 = 56

console.log(x);

// Comparision operator
const currentYear = 2022;

const ageAmol = currentYear - 2004;
const ageSarah = currentYear - 2003;

console.log(ageAmol < ageSarah);
*/

// Operator Presedence
/*
const now = 2022;
const ageAmol = now - 2004;
const ageSarah = now - 2005;

console.log(now - 2004 > now - 2005);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

*/

// coding challenge #1

/*
Mark and john are trying to compare their 
BMI(body Mass Index), which is calculated using 
the formula; BMI = max / height ** 2 = max / (height * height).
(mass in kg and height in meter)

1. store mark's and john's mass and height
 in variables 

2. Calculate both their BMI's using the
 formula (you can event implement both versions)

3. Create a Boolean variable 'markHigherBMI' containing 
information about whether Mark has a higher BMI than John

Test Data 1: Marks weight 78 kg and is 1.69 m tall.
john weight is 92 kg and 1.95 m tall .
Test Data 2: Marks weights 95 kg and is 1.88 m tall. 
john weight 85 kg and 1.76 m tall.



const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / (marksHeight * marksHeight);
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

console.log(
  "MarksBMI " + marksBMI + " is greater than " + "johnsBMI " + johnsBMI
);

const marksHigherBMI = marksBMI > johnsBMI;
console.log(marksHigherBMI);

*/

// Strings and Template Literals
/*
const firstName = "Amol";
const job = "frontEnd Developer";
const birthYear = 2004;
const currentYear = 2022;

const amol =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

console.log(amol);

// template literals

const amolNew = `I'm ${firstName} a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(amolNew);

console.log(`Just a simple string...`);

*/

// Taking Decision if else statements

/*
const age = 13;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah Can start driving license🥳");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
}

const birthYear = 1992;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/

// Coding Challenge #2

/*
Use the BMI example from challenge #1, and the code you already 
wrote, and improve it

1. Print a nice output to the console, saying who has 
the higher BMI, The message can be either "Mark's BMI is 
higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template string include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)"

*/

const marksMass = 78;
const marksHeight = 1.69;
const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = marksMass / (marksHeight * marksHeight);
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnsBMI}!`);
} else {
  console.log(`John's BMI ${johnsBMI} is higher than Mark's ${marksBMI}!`);
}
