# Lesson 32 Objective

## Topics

### Synchronous / Asyncronous, Callbacks
- Intro
- Callbacks
- `setTimeout`
- `setInterval`
- Practical example of both


### Async/Await, Promises
- Introduction
    - **Promises**
        - States
        - Syntax
        - Thenables
- `fetch` API
- Async/Await
- Practical Example
- Fetch Options

Here is an example illustrating these concepts:

```javascript
// Async/Await, Promises, Callbacks
// Using Promises and Fetch API
// fetchExample.js
// Fetch API with Promises
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(url);

// Using Async/Await
// asyncAwaitExample.js

// Async/Await with Fetch API
async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const urlAsync = 'https://jsonplaceholder.typicode.com/posts/1';
fetchDataAsync(urlAsync);

// Async/Await with Fetch API
async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchPost();
```