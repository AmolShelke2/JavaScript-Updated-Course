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
Person.hey = function () {
  console.log('Hey there 👋');
};

console.log(Amol);

Person.hey();

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
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instace method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey,${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const rube = new PersonCl('Ruby Davis', 2004);
console.log(rube);
rube.calcAge();
console.log(rube.age);

console.log(rube.__proto__ === PersonCl.prototype);
PersonCl.hey();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// Keep In mind

// 1. Classes are not Hoisted.
// 2. Classes are First-class citizens.
// 3. Classes are Execured in strict mode.

const walter = new PersonCl('walter White', 2002);

// Setters and Getters

const account = {
  owner: 'Amol',
  movements: [200, 100, 130, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// object.create()

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();
*/
// Coding challenge #2

/*

1. Re-create challenge 1, but this time using Es6 class;

2. Add a getter called 'speedUs' which returns the current speed in
mi/h (divide by 1.6)

3. Add a setter called 'speedUs' which sets the current speed in mi/h 
(but convert it to km/h before storing the value, by multiplying the input 
by 1.6)

4. Create a new car and experiment with the acceleration and brake
methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK.

*/
/*
class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return (this.speed += 10);
  }

  break() {
    return (this.speed -= 5);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new carCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);

*/

// Inheritence between classes constructor function
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2002, 'Computer science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Object);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

*/
