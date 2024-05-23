/*============== Multi-dimensional Array ===============*/
console.log("\nMulti-dimensional Array");

const motors = ["Vehicles", "Motorcyles", "Boats", "Aircraft"];
// bi-dimensional
motors[0] = ["Cars", "Trucks", "Buses", "Vans"];

console.log(motors[0][2]);

// tri-dimesional
motors[0][0] = ["Sedans", "SUVs", "Hatchbacks", "Coupes", "Convertibles"];

console.log(motors[0][0][1]);
console.log(motors);

//  direct multi-dimesional array
const motors2 = [
    ["Cars", "Trucks", "Buses", "Vans"],
    "Motorcyles", 
    "Boats", 
    "Aircraft"
];

console.log(motors2[0][2]);

// Spread operator in Array
console.log("\n\nSpread Operator");

const vehicles3 = ["Cars", "Trucks", "Buses", "Vans"];
const motorcyles = ["Standard", "Cruiser", "Sportbike", "Touring", "Dirt Bike", "Dual-Sport"];

const motors3 = [...motors, ...vehicles3];

console.log(motors3);

/*============== Array Search ===============*/
console.log("\n\n\nArray Search");

let motorcylesIndex = motors.indexOf("Motorcyles");

console.log("This is the index of the Motorcyles:", motorcylesIndex);

// includes method
let includeElem = motors.includes("Boats");

console.log("This is the index of the Motorcyles:", includeElem);

// find method
const numbers = [1, 34, 3, 5, 4, 8, 10];
let passTest = numbers.find(testCase);

function testCase (value, index, array) {
    // check if the value is an even number
    // if (value % 2 === 0) {
    //     return true;
    // }
    // return false;

    // check if the values is greater than 7
    if (value >= 7) { return true; }
    return false
}

console.log("This returns the first element that passes a testCase:", passTest);

/*============== Array Iteration ===============*/
console.log("\n\n\nArray Iteration");

//  using for loop approach
for (let motorcyleIndex = 0; motorcyleIndex < motorcyles.length; motorcyleIndex++) {
    console.log(motorcyleIndex);
    console.log(motorcyles[motorcyleIndex]);
}

console.log("\n\nUsing the ForEach Method");

// array.forEach(function () {

// });