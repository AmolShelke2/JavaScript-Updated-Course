// Object oriented programming

'use strict';

// Learning What is Object-oriented programming

/* 
Object-oriented programming(OOP) is a programming paradigm based on the 
concept of objects.

We use objects to model(describe) real-world abstract features

*/

// Example

const user = {
  // data
  user: 'Amol',
  passWord: 'dk23s',

  login(passWord) {
    // login logic
  },

  sendMessage(str) {
    // sending logic
  }, // Behaviour
};

// There are four main pillar of OOPS Abstraction, Inheritence,
// incapsulation, Polymorphisam,

/* 

Abstraction:  
  Ignoring or hiding details that don't matter allow us to get an overview
  perspective of the thing we're implementing instead of messing with details
  that don't really matter to our implementation.

Encapsulation: 
  Kepping properties and methods private inside the class so they are not 
  accessible from outside the class. some methods can be exposed as a public
  interface(API)

Inheritence: 
 Making all properties and methods of a certain class available to a child class.
 forming hierarchical relationship between classes. this allow us to use 
 common logic and to model real world relationship.

polymorphisam: 
  A child class can overwrite a method it inherited from a parent class.
  [it's more complex that, but enough for our purpose]
  
*/

// OOP In JavaScript
// Prototypes

// complete lecture 4  written all notes in handbook.
// ///////////////////////////////

// OOP In practice
// Written all notes in handbook.

// Construction functions and the new Operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Amol = new Person('Amol', 2004);
console.log(Amol);

// Behind the scenes when we called the function with the new keyword

// 1. New {} is created
// 2. Function is called, this keyword is set to the newly created object.
// 3. {} linked to prototype // more about this later
// 4. function automatically return {}

const matilda = new Person('Matilda', 2002);
const jack = new Person('Jack', 1999);

console.log(matilda);
console.log(jack);

const B_GM = '';
// Instance of
console.log(Amol instanceof Person); // TRUE
console.log(B_GM instanceof Person); // FALSE
