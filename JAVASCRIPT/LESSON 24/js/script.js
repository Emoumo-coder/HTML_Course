/*============== Conditional statements ===============*/

// // IF statement
// let eligibility = false;
// let age = 13;
// let isRestricted = true;
// let message;
// let candidate = 'Obi';

// if (age >= 18 && isRestricted === false) {
//     message = "Your are eligible to vote."
//     // if (candidate === 'Tinubu') {
//     //     message = "You successfully cast vote for Tinubu."
//     // } else if (candidate === 'Obi') {
//     //     message = "You successfully cast vote for Obi."
//     // }
// }
// else {
//     message = "You are not eligible to cast vote!"
// }

// Morning 0 - 11.59; afternoon 12 - 15.59; evening 16 - 18.59; night: 17 - 23.59

let time = 20;
let greeting;

if (time >= 0 && time <= 11.59) {
    greeting = "Good Morning!";
} else if (time >= 12 && time <= 15.59) {
    greeting = "Good Afternoon!";
} else if (time >= 16 && time <= 18.59) {
    greeting = "Good Evening!";
}
 else {
    greeting = "Good Night!";
}

console.log(greeting);

/*============== User Inputs ===============*/

// let notify = alert("Welcome to our web page!!!");

let isStudent = confirm("Are you a student?");
let input;
if (isStudent === true) {
    input = prompt("Enter your name: ");
    input = input.trim().toLowerCase();

    console.log(input);
}

//  switch statement
let welMsg;
console.log(input);
switch (input) {
    case 'umar':
        welMsg = "You are out!";
        break;
    case 'saviour':
        welMsg = "Your are indeed a student";
        break;
    case 'amanda':
        welMsg = "Your are indeed a student";
        break;
    case 'mark':
        welMsg = "Your are indeed a student";
        break;
    case 'ben':
        welMsg = "Your are indeed a student";
        break;
    case 'chi':
        welMsg = "Your are indeed a student";
        break;

    default:
        welMsg = "Your are unauthorised!";
        break;
}

console.log(welMsg);


// Ternary operator 

let like = input === "like" ? "good" : "Oops";

console.log(like);

/*============== Loops ===============*/

// For loop
 
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     console.log("Loop ended");
// }

// While Loop

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

// do while 

// let ii = 0;

// do {
//     console.log(ii);
//     ii++
// } while (ii <= 0);

// continue and break keyword in loops
let str = "Javascript";

// console.log(str[4]);

// The stop the interation where there is 's' character

// for (let strCounter = 0; strCounter < str.length; strCounter++) {
//     if (str[strCounter] === 's') {
//         break;
//     }
//     console.log(str[strCounter]);
// }


// this skips the s chracter
for (let strCounter = 0; strCounter < str.length; strCounter++) {
    if (str[strCounter] === 's') {
        continue;
    }
    console.log(str[strCounter]);
}