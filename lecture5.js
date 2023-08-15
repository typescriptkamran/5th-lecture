"use strict";
// JASON OBJECT
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
console.log(`My Name is ${data_1.data.name}, my age is ${data_1.data.age} my hobies are ${data_1.data.hobbies} I am from ${data_1.data.address.country}, and my city is ${data_1.data.address.city}, and my street address is: ${data_1.data.address.street}.`);
// syntax error
let message = "hello world  from Kamran";
// lett message1 = "Hello World";//syntax error
// typping error message
// consolle.log();
console.log(message);
// Assinability error
let message2;
// message2 = "2" // assignment error
let Rolenumber;
Rolenumber = 1;
// strong_typing
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
let message3;
message3 = "2";
let Rolenumber2;
Rolenumber2 = 1;
let isStudent;
isStudent = true;
// var - const - let
// Varible in Globle Scope & Local Scope
// function
let a = 12; // (globle Scope)
function example() {
    if (a == 12) {
        var x = 10; // (used in if statement as lcale scope)
        console.log(x);
        console.log(a); //  var is global-scoped, it can be use in local scope in if statement
    }
    // console.log(x); // Outputs 10, var is not function-scoped
    console.log(a); //  var is global-scoped, it can be use in function scope
}
example();
//   console.log(x); // Outputs 10, var is not globally scoped
// var, let, and const
var personName = "Muhamma Kamran";
personName = "Ali Phull";
console.log(personName);
// let
let person_Name = "Muhamma Kamran";
person_Name = "Ali Phull";
console.log(person_Name);
// const
const authorName = "Muhamma Kamran";
// authorName = "Ali Phull"
console.log(authorName);
// modules
