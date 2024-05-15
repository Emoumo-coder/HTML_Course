// Variable

// Automatic variable declaration
x = 3;

// Var variable declaration
var x = 5;
var x = 13;

// Let variable declaration
let y = 6;
y = 17;

// const variable declaration
const z = 8;
// z = 30 /* We can not reassign value to const declaration */

console.log(x);
console.log(y);
console.log(z);

// General rules of declaring variables
/*
Names can contain letters, digits and underscores.
Names must begin with a letter or an underscore (_)
Names are case-sensitive ( myVar and myvar are different variables)
Names cannot contain whitespaces or special characters like !, #, %, etc. 
 */


/* // lowercase
let myprice = 12.3;
// uppercase
const MYPRICE = 12.3;
// Camel case
let myPrice = 12.3;
// Pascal case
let MyPrice = 12.3;
// Kabab case
// let my-price = 12.3;
// snake case
let my_price = 12.3; */

const myName = "Umar";

console.log("Name is :", myName);


// DATATYPES

let myString = 'Hello World!';
let myNumber = 24;
let myFloat = 30.4;
let myBigInt = BigInt("123456789012345678901234567890");
let myBoolean = true;
let myBoolean2 = false;
let myUndefined;
let myNull = null;


console.log("This is my boolean", myBoolean);
console.log("This is undefined :", myUndefined);
console.log("This is null :", myNull);
// knowing the datatype
console.log("This is ",typeof myNull, "datatype");