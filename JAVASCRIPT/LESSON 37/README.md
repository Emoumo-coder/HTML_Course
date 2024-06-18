# Lesson 37 Objective

## Topics

### Async/Await, Promises
- Fetch Options
- Date Object
- Regex

Here is an example illustrating these concepts:

```javascript
// Example Using Fetch API with Async/Await:
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchUserData();

```