// /*============== Event Listener ===============*/
console.log("\nEvent Listener");

// addEventListener syntax:
// element.addEventListener(event, function, useCapture);

// const box1 = document.querySelector('.box');
// const box2 = document.querySelector('.box:nth-child(2)')

const boxes = document.querySelectorAll(".box");
const box1 = boxes[0]
const box2 = boxes[1]
const box3 = boxes[2]

function handleBox () {
    console.log("box1 attatched click event");
}

function anotherHandleBox () {
    console.log("another event on box1");
}

box1.addEventListener('click',handleBox)
box1.addEventListener('click', anotherHandleBox)

// Removing the attatched click event on box1. And must have a common function with addEventListener
box1.removeEventListener('click', handleBox)

// Note: This can be use to remove the anotherHandleBox func from the box click event
// In other word: They must reference the same function
// box1.removeEventListener('click', anotherHandleBox)

// Note: This is to show that the anotherHandleBox func will not be removed from the box1 click event
box1.removeEventListener('click', function () {
    console.log("another event on box1");
})

box2.addEventListener('click', function () {
    console.log("box2 was clicked");
})

box3.addEventListener('click', function () {
    console.log("box3 was clicked");
})



window.addEventListener('resize', () => {
    console.log(window.innerWidth);
})


// Event Propagation

const view1 = document.querySelector("#view1");
const parentElement =  document.querySelector("#parentElement");
const childElement = document.querySelector("#childElement");
view1.remove();

// document.body.addEventListener('click', function() {
//     console.log('Body was clicked');
// }, true); // useCapture

// Note: The third argument for addEventListener is useCapture, and requires either true or false. which is by default set to false
// True -- Capturing: The outter-most elements fire first.
// False -- Bubblling: The inner-most elements fire first.

parentElement.addEventListener('click', () => {
    console.log("Parent element was clicked");
}, true)

childElement.addEventListener('click', () => {
    console.log("Child element was clicked");
}, false)

const interact = document.querySelector(".interact");

childElement.addEventListener('click', () => {
    
    if (interact.classList.contains('brown')) {
        interact.classList.remove('brown')
    } else {
        interact.classList.add('brown');
    }
    
    // interact.classList.toggle('brown')
})

const header = document.querySelector("header");

header.addEventListener("mouseover", function () {
    header.style.backgroundColor = "rgb(27, 200, 100)"
})

header.addEventListener('mouseout', function () {
    header.style.backgroundColor = "blueviolet"
})


// /*============== Web APIs ===============*/
console.log("\nWeb APIs");

// console.log(window.location.reload());

// redirection
// window.location.href = "http://127.0.0.1:5501/JAVASCRIPT/LESSON%2029/index.html"

// window.location.replace("http://127.0.0.1:5501/JAVASCRIPT/LESSON%2029/index.html")
// console.log(location);

// Web Storage
console.log("\n\n Session Storage");

window.sessionStorage.setItem("laptop", "Dell");
console.log(sessionStorage.getItem("laptop"));
sessionStorage.removeItem("laptop");
// sessionStorage.clear();
console.log(sessionStorage.getItem("laptop"));

// LOcal Storage section

localStorage.setItem("chair", "Sofa");
localStorage.setItem("chair1", "Wheelchair");

console.log(localStorage.getItem("chair1"));

//  storing array on local storage
const myArray = ["Soup", "Chicken", "Meat"];
const myObject = {
    name: "Mark Yem",
    age: 23,
    action: function () {
        return "THis is a method"
    }
}

// localStorage.setItem("myArray", myArray);
// console.log(localStorage.getItem("myArray"));
// localStorage.setItem("myObject", myObject);
// const localMyObj= localStorage.getItem("myObject");
// // console.log(localMyObj.name);
// console.log(myObject);

// JSON
// JSON are used to send and recieve data from different application
const myObj2 = {
    color: "black",
    height: 45,
    width: 30,
    windows: [3, 6, 7],
    action: function () {
        return "I like houses";
    }
}

console.log(myObj2);

// converting object to json
// in other word sending data
const convertedMyObj2 = JSON.stringify(myObj2);

console.log(convertedMyObj2);

// converting json to object
// In other word recieving data
const recievedMyObj2 = JSON.parse(convertedMyObj2);

console.log(recievedMyObj2);


// storing object to localstorage
localStorage.setItem("myObj2", convertedMyObj2);
const recievedData = localStorage.getItem('myObj2');

console.log(recievedData);
const recievedDataObj = JSON.parse(recievedData);

console.log(recievedDataObj);