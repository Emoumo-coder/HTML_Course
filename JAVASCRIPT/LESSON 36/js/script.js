// /*============== Async/Await ===============*/
console.log("\n\n\n\n\n\nAsync/Await");

const usersData = {
    userEmails: [],
    userWebsites: []
};

// /*============== Refactoring using Async and Await ===============*/

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("The promise will wait till is done!");
//     }, 4000)
// })

// // promise.then((data) => {
// //     console.log(data);
// // })

// async function work () {
//     await promise;
// }

// work();

async function fetchUsers () {
    try {
        const fetchedUsers = await fetch("http://localhost:5000/api/users");

            if (!fetchedUsers.ok) {
                throw new Error('Network response was not ok');
            }
        
            const fetchedUsersData = await fetchedUsers.json();
            fetchedUsersData.map((user) => {
                usersData.userEmails.push(user.email);
                usersData.userWebsites.push(user.website);
            });
            return fetchedUsersData;
    } catch (error) {
        console.log(error);
    }

}

(async () => {
     console.log(await fetchUsers())
})();



// using promise methods
const getDataFromServer = (seconds) => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`This is done in ${seconds}`)
        }, seconds);
    })
};


// getDataFromServer(1000).then((data)=> {
//     console.log(data);
// })
// getDataFromServer(2000).then((data)=> {
//     console.log(data);
// })
// getDataFromServer(2500).then((data)=> {
//     console.log(data);
// })
// getDataFromServer(500).then((data)=> {
//     console.log(data);
// })

const process = [getDataFromServer(1000), getDataFromServer(2000), getDataFromServer(2500), getDataFromServer(500)];

Promise.all(process).then((data) => {
    console.log(data);
});

Promise.race(process).then((data)=> {
    console.log(data);
});