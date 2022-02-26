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
*/

// Type conversion and Coercion

// type Conversion
/*

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 19);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(24), 23);

// type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); // output 10
console.log("23" * "23"); // 529
console.log("25" / "5"); // 5
console.log("24" > "20"); // true

let n = "1" + 1; // 11
n = n - 1; // 11 - 1
console.log(n); // 10

*/

// Truthy and Falsy values

// 5 falsy values '', 0, undefined, null,  NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("amol"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;

if (height) {
  console.log("Yes height is defined");
} else {
  console.log("height is UNDEFINED");
}

*/
/*

// Equality operator == , vs ===
const age = 18;

if (age === 18) console.log("you just became an adult(Strict)");

if (age == 18) console.log("you just become an adult(loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// else if

if (favourite === 23) {
  // '22' === 23 false
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23  or 7 or 9");
}

// not equal operator  !==, !=

if (favourite !== 23) {
  console.log("why not 23?");
}
*/

// Boolean Logic
/*
// and, or, not;

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true; // c

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive ..");
} else {
  console.log("someone else should drive...");
}

*/

// Coding Challenge # 3
/* 

1. Calculate the average score for each team using test
data below.

2. Compare the Team's average scores to determine the 
winner of the competitions, and print it to the console.
Don't forget that there can be a draw, so test for that as 
well (draw means they have the same average score,)

3. Bonus 1: Include a requirement for a minimum score of 100.
with this rule, a team only wins if it has a higher score than 
the other team, and the same time a score at least 100 points,
Hints: use a logical operator to test for minimun score, as well 
as multiple else if block.

4. Bonus 2: Minumum score also applies to a draw! so 
a draw only happens when both teams have same score and both have a score
greater or equal 100 points. Otherwise, no team wins the trophy

Test data: Dolphins score 96, 108, 89. Koalas score 88, 91 , 110

test data bonus 1: Dolphins score 97, 112 and 101. koalas 
score 109, 95 and 123

test data bonus 2: Dolphins score 97, 112 and 101. Koalas score 
109, 95 and 106
*/

// solution  of task 1 and 2

/*
const dolphinsTeamScore = (96 + 108 + 89) / 3;
const koalasTeamScore = (88 + 91 + 110) / 3;

console.log(dolphinsTeamScore, koalasTeamScore);

if (dolphinsTeamScore > koalasTeamScore) {
  console.log(
    "Dolphins Team wins the game with the score of " + dolphinsTeamScore
  );
} else if (koalasTeamScore > dolphinsTeamScore) {
  console.log("Koalas Team wins the game with the score of " + koalasTeamScore);
} else {
  console.log("They have the same score so they not get the trophy..");
}

*/

// solution of bonus # 1
/*
const dolphinsTeamScore = (97 + 112 + 101) / 3;
const koalasTeamScore = (109 + 95 + 123) / 3;

console.log(dolphinsTeamScore, koalasTeamScore);

if (dolphinsTeamScore >= 100 && dolphinsTeamScore > koalasTeamScore) {
  console.log(
    "DolphinsTeam wins the game with the highest score of " + dolphinsTeamScore
  );
} else if (koalasTeamScore >= 100 && koalasTeamScore > dolphinsTeamScore) {
  console.log(
    "KoalasTeamScore wins the game with the highest score of " + koalasTeamScore
  );
} else {
  console.log("NO one wins the game they both get the same scores");
}

*/
// solution of bonus # 2
/*

const dolphinsTeamScore = (97 + 112 + 101) / 3;
const koalasTeamScore = (109 + 95 + 106) / 3;

console.log(dolphinsTeamScore, koalasTeamScore);

if (
  dolphinsTeamScore >= 100 ||
  (koalasTeamScore >= 100 && dolphinsTeamScore === koalasTeamScore)
) {
  console.log(
    `They both have the same score of (${
      (dolphinsTeamScore, koalasTeamScore)
    }) so they both don't get any trophy`
  );
}

// complete  solution

*/

// Switch statement

const day = "tuesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("learn about the JavaScript Section I");
    break;
  case "tuesday":
    console.log("learn about the JavaScript section II");
    break;
  case "wednesday":
    console.log("solve the coding challenges of Section I and Section II");
    break;
  case "thursday":
    console.log("Learn about the JavaScript section III");
    break;
  case "friday":
    console.log("create a project of the section IV");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy Weekend :D");
    break;
  default:
    console.log("Not a valid Day!");
}

// challenge try to convert the switch statement with if/else

/*
const day = "monday";

if (day === "monday") {
  console.log("learn about the JavaScript section I ");
} else if (day === "tuesday") {
  console.log("learn about the JavaScript section II");
} else if (day === "wednesday" || day === "thursday") {
  console.log("solve all the coding challenges from Section I and Section II");
} else if (day === "friday") {
  console.log("Learn about the JavaScript section III");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend :D");
} else {
  console.log("Invalid Day!");
}

*/
