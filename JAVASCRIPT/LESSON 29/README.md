# "Lesson 29 Objective"

## Topics

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
- Throw error
- Error Object
- `finally` Block

### DOM - Document Object Model

- `document.getElementById` Method
- `document.querySelector` Method
- `style` Property on Selected Element
- `document.getElementsByTagName` Method
- `querySelector` Method
- Selection of Even Children Using `(nth-of-type(2n)` Pseudo Class
- `textContent` Property
- `innerHTML` Property
- `parentElement`, `children`, `childNodes`, `lastChild`, `lastElementChild`, `firstChild`, `firstElementChild`, `nextSibling`, `nextElementSibling`, `previousSibling`, `previousElementSibling` Properties
- `hasChildNodes` Method
- `remove` Method
- `createElement` Method
- `append` Method

### Event Listener

- Syntax
- `addEventListener` and `removeEventListener` Methods
- `event` Object and `event.target` Property
- `stopPropagation` and `useCapture`
- `classList` Property on Element and Its `add`, `remove`, and `toggle` Methods
- Some Available Events: `mouseover`, `mouseout`, `readystatechange`

Here is an example illustrating these concepts:

#### DOM Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <div id="parent">
        <p class="child">First Child</p>
        <p class="child">Second Child</p>
        <p class="child">Third Child</p>
    </div>
    <script>
        // getElementById
        const parentDiv = document.getElementById('parent');

        // querySelector
        const firstChild = document.querySelector('.child');

        // style property
        firstChild.style.color = 'red';

        // getElementsByTagName
        const children = parentDiv.getElementsByTagName('p');

        // nth-of-type pseudo class
        const evenChildren = document.querySelectorAll('#parent p:nth-of-type(2n)');
        evenChildren.forEach(child => child.style.backgroundColor = 'lightblue');

        // textContent and innerHTML
        console.log(firstChild.textContent);
        console.log(parentDiv.innerHTML);

        // parentElement and children
        console.log(firstChild.parentElement);
        console.log(parentDiv.children);

        // childNodes, firstChild, lastChild
        console.log(parentDiv.childNodes);
        console.log(parentDiv.firstChild);
        console.log(parentDiv.lastChild);

        // firstElementChild, lastElementChild
        console.log(parentDiv.firstElementChild);
        console.log(parentDiv.lastElementChild);

        // nextSibling, previousSibling, nextElementSibling, previousElementSibling
        console.log(firstChild.nextSibling);
        console.log(firstChild.previousSibling);
        console.log(firstChild.nextElementSibling);
        console.log(firstChild.previousElementSibling);

        // hasChildNodes, remove, createElement, append
        console.log(parentDiv.hasChildNodes());
        const newChild = document.createElement('p');
        newChild.textContent = 'New Child';
        parentDiv.append(newChild);
        firstChild.remove();
    </script>
</body>
</html>


<!-- Event listener Example -->

<!DOCTYPE html>
<html>
<head>
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

        // addEventListener and removeEventListener
        const handleClick = () => console.log('Another click handler');
        button.addEventListener('click', handleClick);
        button.removeEventListener('click', handleClick);

        // stopPropagation and useCapture
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

        // Some available events: mouseover, mouseout, readystatechange
        document.addEventListener('readystatechange', function() {
            console.log('Ready state changed to:', document.readyState);
        });
    </script>
</body>
</html>
