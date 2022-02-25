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

const now = 2022;
const ageAmol = now - 2004;
const ageSarah = now - 2005;

console.log(now - 2004 > now - 2005);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
