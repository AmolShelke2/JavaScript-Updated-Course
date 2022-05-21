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

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this.
  this.calcAge = function () {
    console.log(2022 - this.birthYear);
  };
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

// Prototypes in practice
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

Amol.calcAge();
matilda.calcAge();

console.log(Amol.__proto__);
console.log(Amol.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Amol));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

// We can also set properties on prototype
Person.prototype.job = 'Teacher';
console.log(Amol.job, matilda.job);

// whether an object has a property with the specified name.
console.log(Amol.hasOwnProperty('firstName'));
console.log(Amol.hasOwnProperty('job'));

// Prototypal Inheritance and the Prototype chain

Amol.hasOwnProperty('name');
console.log(Amol.hasOwnProperty('name')); // False

// Prototypal inheritence on Built in objects.

console.log(Amol.__proto__);
// Object.prototype {top of prototype chain}
console.log(Amol.__proto__.__proto__);
// Null
console.log(Amol.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 6, 4, 2, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(dir => x + 1);

///////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a 
speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the
 car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's 
speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 'accelerate' 
and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

console.log(BMW, Mercedes);

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

BMW.accelerate();
Mercedes.accelerate();

BMW.accelerate();
BMW.accelerate();

Mercedes.accelerate();

console.log('-----------------------------');

Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

BMW.brake();
Mercedes.brake();
Mercedes.brake();

*/

/////////////////////////////////////////////////////////////
// Es6 classes.

// class Expression.
// const personCl = class {

// }

// class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey,${this.firstName}`);
  }
}

const rube = new PersonCl('Ruby', 2004);
console.log(rube);
rube.calcAge();

console.log(rube.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

rube.greet();
