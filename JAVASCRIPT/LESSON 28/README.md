# Lesson 28 Objective

## Topics

### Classes

- Class Syntax
- Constructor
- Getters and Setters
- Visibility

### JSON

- JSON Syntax
- `stringify` Method
- `parse` Method

### Error Handling

- `"use strict"`
- `ReferenceError`
- `SyntaxError` (Uncaught)
- `TypeError` (Uncaught)
- `try-catch` (Custom Error)
  - **Error Properties**
    - `name` Property
    - `message` Property
    - `stack` Property
  - **Console Object**
    - `log` Method
    - `error` Method
    - `table` Method
- Custom Error Function
- Error Object
- `finally` Block

### DOM - Document Object Model

- `document.getElementById` Method
- `document.querySelector` Method
- `style` Property on Selected Element
- `document.getElementsByTagName` Method
- Query Selector


```javascript
class Person {
    constructor(name, age) {
        this._name = name; 
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a positive number");
        }
    }

    _privateMethod() {
        console.log("This is a private method");
    }
}

let person = new Person("John Doe", 30);
console.log(person.name); // John Doe
person.name = "Jane Doe";
console.log(person.name); // Jane Doe

// JSON

const jsonString = JSON.stringify({ name: "John", age: 30 });
console.log(jsonString); // {"name":"John","age":30}

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: "John", age: 30 }

/* Error */

"use strict";

try {
    console.log(x); // ReferenceError
} catch (error) {
    console.error(error.name); // ReferenceError
    console.error(error.message); // x is not defined
    console.error(error.stack); // Stack trace
}

try {
    eval('foo bar'); // SyntaxError
} catch (error) {
    console.error(error.name); // SyntaxError
    console.error(error.message); // Unexpected identifier
}

try {
    null.f(); // TypeError
} catch (error) {
    console.error(error.name); // TypeError
    console.error(error.message); // Cannot read property 'f' of null
}

try {
    throw new Error("This is a custom error");
} catch (error) {
    console.error(error.name); // Error
    console.error(error.message); // This is a custom error
} finally {
    console.log("This will always execute");
}

// Console Object Methods
console.log("This is a log message");
console.error("This is an error message");
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);

/* DOM */

// Assume the HTML has elements with these IDs and tags
// <div id="myDiv">Hello World</div>
// <p>First paragraph</p>
// <p>Second paragraph</p>

document.getElementById("myDiv").style.color = "blue"; // Changes the text color to blue

const myElement = document.querySelector("#myDiv");
myElement.style.backgroundColor = "yellow"; // Changes the background color to yellow

const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.fontSize = "20px"; // Changes the font size of all paragraphs to 20px
}

const firstParagraph = document.querySelector("p");
firstParagraph.style.fontWeight = "bold"; // Makes the first paragraph bold
