'use strict'
 
// An high-Level Overview of JavaScript

/* 

1. High Level
2. Garbage collected
3. Interpreted or just in time compiled
4. Multi-paradigm
5. Prototype-based object oriented
6. first class functions
7. Dynamic
8. Single threded
9. Non-Blocking event loop

*/

// The JavaScript Engine and Runtime.

/* 
What is JavaScript Engine?:  
    A javaScript Engine is simply a computer program that executes 
    javaScript code.

What a JavaScript Runtime is?: 
    We can imagine the JavaScript runtime as a big box which includes all 
    the things that we need in order to use javaScript in this case, in the 
    browser And a heart of  any javaScript engines runtime is always a 
    javaScript engine.
*/

// Execution in Detail?

// whats inside execution context

/* 
1. Variables Enviorment
    - Let, const and var declaration
    - Functions
    - arguments object

2. Scope chain
3. This Keyword

Execution context belonging to arrow functions, do not get their argument
object nor do they get the this keyword


*/

// What is scope And scope chain

/* 
  there are three types of scopes in JavaScript.
    1. Global Scope 
        it means we can access the variable from anywhere in our code 
        that declare  on the top level.
    2. function scope 
        it means we can only access the variables inside the function
        not outside
    3. Block Scope 
        variable are accessible only inside block(block scoped)
        however this only applies to let and const variable
        function are also block scoped(only in blocked scoped)
*/

// Scope Chain in Practise.

/*
function calcAge(birthYear) {
    const age = 2022 - birthYear

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true
            // Creating new variable with the same name as outer 
            // scopes variable
            const firstName = 'Jonas'

            // Reasigning outer scope's variable
            output = 'New Output'
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str)

            function add(a, b) {
                return a + b
            }
        }
        // console.log(str) // Error 
        console.log(millenial) // True
        //console.log(add(2, 7)) // if we use strict mode it will throw error
                            // and if we remove the strict mode it will work properly                  

        console.log(output)
    }
    printAge()

    return age
}

const firstName = 'Amol'
calcAge(1991)
// printAge()
// console.log(age)

*/

// Variable EnviorMent Hoisting and the TDZ
 
/* 
Hoisting make some types of variables accessible in the code before 
they are actually declared variable lift to the top of their execution contexts

*/
/*
// Temporal DeadZone

const myName = 'Amol'

if (myName === 'Amol') {
    console.log(`Amol is a ${job}`)
    const age = 2022 - 2004; 
    console.log(age) // it will throw an error as cannot acces 'job' before initialization
    const job = 'SDE-1'
    console.log(x)
}

*/

// Hoisting and Temporal Deadzone in practise

// variables
// console.log(me)
// console.log(job)
// console.log(year)

/*

var me = 'Amol'
let job = 'SDE'
const year = 2004

// function

console.log(addDecl(2, 3))

function addDecl(a, b) {
    return a + b
}

// console.log(addExpr(2, 3))

const addExpr = function (a, b) {
    return a + b
}

// console.log(addExpr(2, 4))
const addArrow = (a, b) => a + b

// Example
console.log(numProducts)
if (!numProducts) deleteShopping()

var numProducts = 10

function deleteShopping() {
    console.log('All Products deleted')
}

var x = 1
let y = 2
const z = 3


console.log(x === window.x) // True because the var declaration
// will create a place in browsers window object.
*/

// The This Keyword

/* this keyword/variable: Special variable that is created for every
execution context (every function) takes the value of (points to) the 
'owner' of the function in which the this **This** Keyword is used.

This in not static. it depends on how the function is called, and its
value is only assigned when the function is actually called.

*/

// The This Kyeword in practise.
/*
// console.log(this) // window object

const calcAge = function (birthYear) {
    console.log(2022 - birthYear)
    // console.log(this) // Undefined when we call the regular function the this keyword will be undefined when we are strict mode 
    // and we are not using the strict mode this will simply points to the global object
}

calcAge(2004)

const calcAgeArrow = birthYear => {
    console.log(2022 - birthYear)
    // console.log(this) // it will point to the window object because the arrow function does not get the this keyword
}

calcAgeArrow(2002)

// this keyword in method

const amol = {
    year: 2004,
    calcAge: function () {
        console.log(this)
        console.log(2022 - this.year)
    }
}

amol.calcAge() // bacause in this case amol was the object calling that method


const matilda = {
    year: 2002,
}

matilda.calcAge = amol.calcAge;
matilda.calcAge()
// In this case it will points to the matilda object bacuse here 
// we are calling the method on matilda 

const f = amol.calcAge
f()
// so here we are trying to assign the calcAge function to f
// and calling the f function as an regular call so it will
// simply log undefined because here it does not have any object who is calling the method

*/

// regular function vs arrow function
/*
 
const amol = {
    firstName: 'Amol',
    year: 1981,
    calcAge: function () {
        console.log(this)
        // console.log(2022 - this.year)
        
        // // SOlution 1 
        // const self = this 
        // const isMillinial = function () {
        //     console.log(self)
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // };
        
        // Solution 2 
        const isMillinial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillinial()
    },

    greet: () => {
        console.log(this)
        console.log(`Hey ${this.firstName}`) // it will log dpac to the console because the arrow function does not get their own this keyword
        // so the this keyword will points to the global object and it will find their is a variable declare with the var keyword firstName so it will 
        // get the dpac from their
    },
}
amol.greet()
amol.calcAge()

// Arguments keywords

const addExpr = function (a, b) {
    console.log(arguments)
    return a + b
}
addExpr(2, 4)
addExpr(2, 4, 6,77, 7, 7)

var addArrow = (a, b) => {
    console.log(arguments)
    return a + b
}
addArrow(2, 5, 6)
*/

// Primitive vs Object(primitives vs. Reference types.)
/*

let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
     name: 'jonas',
     age: 30,
}
 
const friend = me;
friend.age = 22;
console.log('Friend:', friend)
console.log('Me', me)  

*/

/*
// Primitives vs Objects in Practise.

// Primitive types
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName) // Davis
console.log(oldLastName) // Williams

// refrence Types
const jessica = {
    firstName: 'Jessica', 
    lastName: 'Williams', 
    age: 27, 
} 


const marriedJEssica = jessica
marriedJEssica.lastName = 'Devis'
console.log('Before Marriage:', jessica) // Devis
console.log('After Marriage:', marriedJEssica) // Devis

// marriedJEssica = {} // Error

// Copying Object

const jessica2 = {
    firstName: 'Jessica', 
    lastName: 'Williams', 
    age: 27, 
    family: ['Alice', 'Bob']
} 

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before Marriage:', jessica2) 
console.log('After Marriege:', jessicaCopy)

*/
