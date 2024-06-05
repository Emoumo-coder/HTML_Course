function doSomething (callback) {
    callback();
}

// const cb = () => console.log("This is a callback.");

function cb () {
    console.log("This is a callback.");
}

// function sequence
anotherAction();
doSomething(cb);

function anotherAction () {
    console.log("I am another action.");
}

//  Sequence Control

function myCalculator (a, b, callback) {
    let sum =  a + b;

    if (callback)  callback(sum);
}

function myDisplayer (text) {
    document.getElementById("result").innerText = text;
}

myCalculator(7,5, myDisplayer);

// /*============== Asyncronous ===============*/
console.log("\n\n\n\n\n\nAsyncronous");

import { something } from "./async.js";

something();