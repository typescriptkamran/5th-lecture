// JASON OBJECT

import { log } from "console";
import {data} from "./data"


console.log (`My Name is ${data.name}, my age is ${data.age} my hobies are ${data.hobbies} I am from ${data.address.country}, and my city is ${data.address.city}, and my street address is: ${data.address.street}.`)


// syntax error

let message = "hello world  from Kamran"
// lett message1 = "Hello World";//syntax error

// typping error message
// consolle.log();
console.log(message);

// Assinability error

let message2: number
// message2 = "2" // assignment error

let Rolenumber: number
Rolenumber  = 1 

// strong_typing

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

let message3: string
message3 = "2"

let Rolenumber2: number
Rolenumber2 = 1
let isStudent: boolean
isStudent = true
// var - const - let

// Varible in Globle Scope & Local Scope

// function

let a: number = 12 // (globle Scope)

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

var personName: string = "Muhamma Kamran"

personName = "Ali Phull"

console.log(personName);

// let

let person_Name: string = "Muhamma Kamran"

person_Name = "Ali Phull"

console.log(person_Name);

// const

const authorName: string = "Muhamma Kamran"

// authorName = "Ali Phull"

console.log(authorName);

// modules
// https://www.typescriptlang.org/docs/handbook/esm-node.html