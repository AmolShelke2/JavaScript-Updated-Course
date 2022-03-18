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
