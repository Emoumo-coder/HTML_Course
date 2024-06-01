# Lesson 31 Objective

## Topics

### Modules

- Exporting Methods from Different JavaScript Files
- Different Exporting Methods
- Importing Files
- `as` Keyword on Import
- Import All Methods from a Module
- Default Method on Importing All Methods from a Module

### Higher Order Function

- Definition
- Examples

### Async/Await, Promises, Callbacks *

- Introduction
- `setTimeout`
- `setInterval`
- Callbacks
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

// Practical Example Combining Concepts
// app.js

import { add, subtract } from './mathUtils.js';
import multiply from './mathUtils.js';

// Higher Order Function example
function higherOrderFunction(callback) {
    const result = callback(5, 3);
    console.log(result);
}

// Example usage with imported methods
higherOrderFunction(add); // 8
higherOrderFunction(subtract); // 2
higherOrderFunction(multiply); // 15

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