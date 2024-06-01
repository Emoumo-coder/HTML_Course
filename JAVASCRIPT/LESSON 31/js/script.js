import { add, subtract } from "./module/math.js";
// import function from "location"
// Exporting method 1
// import cars, { startEngine } from "./module/car.js"
// import cars from "./module/car.js"
// Exporting method 2
import * as car1 from "./module/car.js"
import posts from "./module/posts.js";

console.log(add(2, 2));
console.log(subtract(5, 10));

// second import

console.log(car1);

console.log(car1.startEngine());
console.log(car1.default);

/******************* Higer Order Function ***************/
console.log("\n\n\n\n\nHiger Order Function");

/* A “higher-order function” is a function that accepts functions 
as parameters and/or returns a function. */

// Higher Order Function Example

// Higher order function
function higherOrderFunction(callback) {
    const data = 'Hello, World!';
    callback(data);
}

// Callback function
function callbackFunction(message) {
    console.log(message);
}

// Using the higher order function
higherOrderFunction(callbackFunction);

// example 2:

/* some of the built-in higher order functions are:
map, filter, reduce, some, forEach etc */

// array.forEach(element => {
    
// });

// logging each post using forEach ** I also an higher-order function
// posts.forEach(function (post) {
//     console.log(post);
// })

// filter function
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
})

console.log(filteredPosts);

// map function **Honestly works similar with forEach
const filterPostIds = filteredPosts.map(filteredPost => {
    return filteredPost.id;
})

console.log(filterPostIds);

// reduce 
const multipleOfFilterPostId = filterPostIds.reduce((total, filterPostId) => {
    return total * filterPostId;
});

console.log(multipleOfFilterPostId);



// 
function onClick12(size) {
    console.log("wwwww");
}