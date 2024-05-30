# Lesson 30 Objective

## Topics

### Event Listener

- Syntax
- `addEventListener` and `removeEventListener` Methods
- `event` Object and `event.target` Property
- `stopPropagation`, `event.preventDefault`, and `useCapture`
- `classList` Property on Element and Its `add`, `remove`, and `toggle` Methods
- Some Available Events: `mouseover`, `mouseout`, `readystatechange`

### Web Storage API

- Introduction
- `location` Property
- **sessionStorage**
  - `setItem`, `getItem`, `removeItem`, `clear`, `key` Methods
  - `length` Property
- **localStorage**
  - `setItem`, `getItem`, `removeItem`, `clear`, `key` Methods
  - `length` Property

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

Here is an example illustrating these concepts:

```html
<!-- Event Listener Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <script>
        const button = document.getElementById('myButton');

        // Event listener syntax
        button.addEventListener('click', function(event) {
            console.log('Button was clicked');
            console.log(event.target);
        });

        // stopPropagation and preventDefault
        document.body.addEventListener('click', function() {
            console.log('Body was clicked');
        }, true); // useCapture

        button.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Button click stopped propagation');
        });

        // classList add, remove, toggle
        button.addEventListener('mouseover', function() {
            button.classList.add('hover');
        });

        button.addEventListener('mouseout', function() {
            button.classList.remove('hover');
        });

        button.addEventListener('click', function() {
            button.classList.toggle('clicked');
        });
    </script>
</body>
</html>

<!-- Web Storage API Example -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Web Storage API Example</title>
</head>
<body>
    <script>
        // sessionStorage example
        sessionStorage.setItem('name', 'Alice');
        console.log(sessionStorage.getItem('name')); // Alice
        sessionStorage.removeItem('name');
        console.log(sessionStorage.length); // 0

        // localStorage example
        localStorage.setItem('name', 'Bob');
        console.log(localStorage.getItem('name')); // Bob
        localStorage.removeItem('name');
        console.log(localStorage.length); // 0
    </script>
</body>
</html>
```
- **Modules Example**
```javascript
// math.js (module file)

// Named export
export function add(a, b) {
    return a + b;
}

// Default export
export default function subtract(a, b) {
    return a - b;
}

// main.js (importing module)

// Import named export
import { add } from './math.js';

// Import default export
import subtract from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

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

```