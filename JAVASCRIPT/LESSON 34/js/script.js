// /*============== Promises ===============*/

// Good example of async on event
/* addEventListener('DOMContentLoaded', () => {
    console.log("Gooooooooooooof");
});
console.log("I am good"); */

const promise = new Promise((resolve, reject) => {
    let error = false;

    // Fullfiled state
    // if (!error) {
    //     resolve("The promise passed.");
    // } else {
    //     reject("The promise is rejected.")
    // }

    // Pending state
    // if (!error) {
    //     setTimeout(() => {
    //         resolve("The promise passed.");
    //     }, 3000)
    // } else {
    //     reject("The promise is rejected.")
    // }

    // rejected state
    error = true;
    if (!error) {
        setTimeout(() => {
            resolve("The promise passed.");
        }, 3000)
    } else {
        reject("The promise is rejected.")
    }
});

console.log(promise);

function promise2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("The promise is wait till is done!");
        }, 4000)
    });
}

// Interacting with promises using the thenable

promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.error(error);
    }
).catch((err) => {
    console.error(err);
})

// console.log(promise2());

promise2().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})



























// function sample(additionalAction) {
//     console.log("Sample of an action.");

//     additionalAction();
// }

// sample(() => {
//     console.log("action is undergoing a long process");
// });

// /*============== Excersise ===============*/

function operate (cleanUp) {
    let random1 =  Math.floor(Math.random() * (255 - 0) + 0);
    let random2 =  Math.floor(Math.random() * (255 - 0) + 0);
    let random3 =  Math.floor(Math.random() * (255 - 0) + 0);
    console.log(); 
    document.body.style.backgroundColor = 'rgb('+ random1 + ',' + random2 + ','+ random3+')'
    cleanUp();
}



operate(() => {
    setInterval(() => {
        let random1 =  Math.floor(Math.random() * (255 - 0) + 0);
        let random2 =  Math.floor(Math.random() * (255 - 0) + 0);
        let random3 =  Math.floor(Math.random() * (255 - 0) + 0);
        console.log(); 
        document.body.style.backgroundColor = 'rgb('+ random1 + ',' + random2 + ','+ random3+')'

    }, 500)
});

// simple 2