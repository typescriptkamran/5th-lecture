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
// let and const
const num1 = 1;
// num1 = 5 / can not assing a new value to const
const Myname = `Kamran`;
// Myname = "Ali" // can not assing new value as it is const.
let num2;
num2 = 1;
num2 = 5;
console.log(num2);
//use const where variable values do not change
const a = 5;
const b = 33;
const c = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (a === 5) {
    let z = 4;
    const y = 6;
    console.log(z);
    //use z
}
else {
    let z = "string";
    console.log(z);
    //use z
}
// console.log(z)
//  as veriable definde with let (z) was defined in local scope it will not work in globle scope. 
// console.log(y)
//  as const y was defined in local scope it will not work in globle scope.
