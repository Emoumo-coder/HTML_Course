// console.log(Math.floor(Math.random() * (100 - 95 + 1) + 95));
// console.log(Math.floor(Math.random() * 100 + 95));


// String
let str = "Hello world!";
let str2 = "Mathemathics"
let strLen = str.length;

console.log("This is the string lenght property: " + strLen);

// charAt Method
let characterOfStr = str.charAt(11);

console.log("This is the string chartAt Method: " + characterOfStr);

// indexOf Method
let indexOfStr = str.indexOf("l");

console.log("This is the string indexOf Method: " + indexOfStr);

// lastIndexOf Method
let lastIndexOfStr = str.lastIndexOf("world");
let lastIndexOfStr2 = str2.lastIndexOf("th");

console.log("This is the string lastIndexOf Method second: " + lastIndexOfStr2);

// slice Method
let sliceStr = str.slice(6, 11);

console.log("This is the string slice method: " + sliceStr);

// toUppercase Method
let toUppercaseStr = str.toLocaleUpperCase();

console.log("This is the string toUppercase method: " + toUppercaseStr);

// toLowercase Method
let toLowercaseStr = str.toLowerCase();

console.log("This is the string toLowercase method: " + toLowercaseStr);

// includes Method
let includesStr = str.includes("!");

console.log("This is the string includes method: " + includesStr);

// split Method
let splitStr = str2.split("t");

console.log("This is the string split method: " + splitStr);

/*============== Number Object ===============*/
console.log("\n\n\n Number>>>");

let num = 34;
let numNumberFunc = Number(num);

console.log(numNumberFunc);

// isInteger method
let numIsInteger = Number.isInteger(num);

console.log(numIsInteger);

// parseFloat Method
let numParseFloat = Number.parseFloat(22);

console.log(numParseFloat);

// parseInt Method
let numParseInt = Number.parseInt(22.33);

console.log(numParseInt);

// parsetoFixed Method
let numParsetoFixed = Number(23.558).toFixed(2);

console.log(numParsetoFixed);

// isNaN Method
let numisNaN = Number.isNaN(2);

console.log(numisNaN);

// toString method
let numtoString = Number(333).toString();

console.log(numtoString);

// Global NaN Function
let numGlobalNaN = isNaN("ee");

console.log(numGlobalNaN);

// chaining of method
let numChaining = Number.parseInt(33.96).toFixed(4);

console.log(numChaining);

/*============== MATH Object ===============*/
console.log("\n\n\n MATH OBJECT>>>");

let math = 20.933;
let mathPi = Math.PI;

console.log(mathPi);

// trunc method
let numtrunc = Math.trunc(math);

console.log(numtrunc);

// round method
let numround = Math.round(math);

console.log(numround);

// ceil method
let numceil = Math.ceil(60.01);

console.log(numceil);

// floor method
let numfloor = Math.floor(60.7);

console.log(numfloor);

// pow method
let numpow = Math.pow(2,7);

console.log(numpow);

// min method
let nummin = Math.min(2,7,3, 0,0.2);

console.log(nummin);

// max method
let nummax = Math.max(2,7,3, 0,0.2);

console.log(nummax);

// random method
// formula for generating random number: 
// random() * (max - min + 1) + min
let numrandom = Math.floor(Math.random() * 10 + 1);
// let say min = 50, max = 100
let randomFrom50To100 = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(numrandom);
console.log("This is random number from 50 to 100: " + randomFrom50To100);

// Programmers solve problems by desolving them into several small problems


/*============== Excersise ===============*/
console.log("\n\n\n Excersise>>>");

let name = "Savioura";
let nameLen = name.length;
let randomNum = Math.floor(Math.random() * nameLen);
let characterAtName = name.charAt(randomNum);

console.log(characterAtName);