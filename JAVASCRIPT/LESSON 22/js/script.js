let x = 22;
let y = 12;


console.log("THis is the value of x and y", x, y);

// operators
let z = x + 7;
let z1 = x + y;
console.log("This is the sum of x and 7", z);
console.log("This is the sum of x and y", z1);

console.log("\nSubtraction>>>");

let a = x - 7;
let b = x - y;
console.log("This is the sub of x and 7", a);
console.log("This is the sub of x and y", b);

console.log("\nMultiplication>>>");

let c = x * 7;
let d = x * y;
console.log("This is the mul of x and 7", c);
console.log("This is the mul of x and y", d);


console.log("\nDivision>>>");

let e = x / 7;
let f = x / y;
console.log("This is the div of x and 7", e);
console.log("This is the div of x and y", f);

console.log("\n Equation>>>");

// s = a + (b - c)
// let say: a = 2; b = 3; c = 4;
let s = 2 + (3 - 4);
console.log("This is result of s = a + (b - c) expression", s);


console.log("\n Exponentiation>>>");

let i = 2 ** 4;
console.log("This is the power of 2 and 2: ", i);


console.log("\n Modulus>>>");

let j = 7 % 2;
console.log("This is the mud of 4 and 2: ", j);


console.log("\n Increment>>>");

x += 3;
x += 3;
// x++;
console.log("This is the increment of x and 3: ", x);

console.log("\n Decrement>>>");

x -= 3;
x -= 3;
// x++;
console.log("This is the Decrement of x and 3: ", x);

console.log("\n Multiplication short syntax>>>");

// y = y * 2;
y *= 2;
console.log("This is the multi of y and 2: ", y); // same also goes for divison , multiplication modulus, and exponentiation.


/*============== COMPARISON OPERATORS ===============*/
let comA = 5;
let comB = '5';
// let comResult = comA == comB; /* insensitive equal comparison */
let comResult = comA === comB;

console.log(comResult);
console.log(typeof comB);

// negative equal comparison
let comC = '10';
let comD = '10';
// let comResultB = comC != comD; /* insensitive not equal comparison */
let comResultB = comC !== comD;

// Greater than sign
let comE = 5;
let comF = 8;

let comResultC = comE > comF;

console.log(comResultC);

// Greater than sign
let comG = 5;
let comH = 8;

let comResultD = comE < comF;

// greater than or equal operator

console.log(comResultD);

// Greater  than or  sign
let comI = 5;
let comJ = 8;

let comResultE = comI >= comJ;

console.log(comResultE);

// Logical operators
let opA = 5;
let opB = 25;

let opResult = 2 > 1 && 1 == 1;
//  Or logical operator
let opResultB = 2 > 1 || 1 == 2;

// 5 + 3

console.log(!opResult);

/*============== Concatenation on string ===============*/

console.log("\n\n\n\n\n\n\n\n\n\n");


//  String concatenation
let str = "I am ";
let myName = "Umar";
const bootcamp = "Hint Media";
let str2 = "I am from the " + bootcamp + " Bootcamp"

let completeMessage = str + myName + "\n\n\n\n" + str2;

console.log(completeMessage);