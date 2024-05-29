"use strict";

// /*============== Object ===============*/
console.log("\nError Handling");

// Uncaught ReferrenceError
let x = 3;

// Uncaught SyntaxError
let ev = "2 + 3";

// console.log(eval(2, .));

// Uncaught TypeError
// x()

// Custom Error
// const isGood = () => console.log("I am good");
// try {
//     isGood();
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     // console.log("There is an error.");
// }
// using destructuring technique
// try {
//     isGood();
// } catch ({name, message, stack}) {
//     // console.log(error);
//     console.log(name);
//     console.log(message);
//     console.log(stack);
//     // console.log("There is an error.");
// }
// Console object
try {
  isGood();
} catch ({ name, message, stack }) {
  console.error(message);
  console.table([{ name: "Myname", phone: 33333, address: "Alll" }]);
}

console.log("\n\nThrowing error");

// Throwing error
try {
  throw new CustomError("This was thrown.");
} catch (error) {
  console.error(error);
  console.error(error.name);
}

function CustomError(message) {
  this.name = "CustomError";
  this.message = message;
  // this.stack = (new Error()).stack;
}

console.log(22222222);

//  practice

let ii = 0;
while (ii < 10) {
  try {
    if (ii % 2 !== 0) {
      throw new NotEvenNumberError();
    }
    console.log(ii);
  } catch (error) {
    console.error(error.message);
    console.error(error.name);
  } finally {
    ii++;
  }
}

function NotEvenNumberError(message) {
  this.name = "NotEvenNumberError";
  this.message = message || "The number is not an even number.";
}



// /*============== DOM ===============*/
console.log("\n\n\n\n\n\nDOM");

