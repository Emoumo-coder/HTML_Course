/*============== Function ===============*/

function sum (num1, num2) {
    // console.log(num1 + ", " + num2);

    if (!num2) {
        return num1 + num1;
    }
    // console.log(num2);
    return num1 + num2;
    console.log("This area is not going to be executed, because od the return keyword.");
}

// sum (3, 4);
// sum (3, 4);

// alert(sum(6, 5));

console.log(sum(12));

// Arrow Function
const multipleOfThree = (num1, num2, num3) => {
    if (num1 === undefined || num2 === undefined || num3 === undefined) {
        return 0;
    }

    return num1 * num2 * num3;
}

console.log(multipleOfThree(2, 3));

// Anonymous function
const speak  = function () {
    console.log("I am a good programmer.");
}

speak()


/*============== Scope ===============*/

console.log("\n\n\n\n\n\n\n\n");

// Global scope variable
let str = "Barman";

function test () {
    // Block scope variable
    let pass = true;

    console.log(pass);

    console.log(str);
}

console.log(str);
test();
// This should throw error since it function scope
// console.log(pass);

// Local Scope

if (true) {
    let interest = "I have";
    console.log(interest);
}

for (let it = 0; it < 3; it++) {
    console.log(it);
}

//  This gives error as 'it' is declare in the for loop
// console.log(it);

// console.log(interest);



/*============== Array ===============*/

console.log("\n\n\n\n\n\n\n\n");

const cars = ['Gwagon', 'BMW', 'Mercedez'];
// let cars = new Array('Gwagon', 'BMW', 'Mercedez');

console.log(cars);

// accessing array item 

console.log(cars[1]);

// Array mutation
cars[1] = "Volvo";

console.log(cars);

// sort cars by name
let carsSorted = cars.sort();
console.log(carsSorted);

// push cars by name
let carsPushed = cars.push("Ferrari");
console.log(cars);

// pop cars by name
let carsPop = cars.pop("Ferrari");
console.log(cars);

// shift method of an array
let carsShifted = cars.shift();
console.log(cars);

// unshift method of an array
let carsUnshifted = cars.unshift("4matic");
console.log(cars);

// splice method of an array
cars.push("Tondra");
cars.push("Camry");
cars.push("Rav4");
console.log(cars);
let carsSplice = cars.splice(0, 2);
console.log(cars);