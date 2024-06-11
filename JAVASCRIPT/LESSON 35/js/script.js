// /*============== Promises ===============*/

import { dog } from "./dog.js";

// dog()

// /*============== Fetch API ===============*/
console.log("\n\n\n\n\n\nFetch API");

const usersData = {
    userEmails: [],
    userWebsites: []
};

const users = fetch("https://jsonplaceholder.typicode.com/users");

users.then((response) => {
    if (response.ok) {
        console.log(response);
        return response.json();
    } else {
        console.log("Your request went wrong!");
    }
}).then((users) => {
    // first task
    users.map((user) => {
        usersData.userEmails.push(user.email);
        usersData.userWebsites.push(user.website);
    });
    console.log(usersData);

    // second task: dump the data to the html table.
    dumpTotable(users);

})

console.log("Working💪💪...");

console.log(usersData);

function dumpTotable (users) {

    const tableBody = document.querySelector('tbody');

    tableBody.innerHTML = users;
}