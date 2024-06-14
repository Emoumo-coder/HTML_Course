# Assignment

**Objective:** Create a webpage that asynchronously fetches data from a server using both thenables (Promises with `.then`) and async/await syntax. Interact with the DOM to display the fetched data and style your page uniquely (do not copy the styling from our class examples).

**Instructions:**

1. **Setup:**
   - Create an HTML file (`index.html`), a CSS file (`styles.css`), and a JavaScript file (`script.js`).
   - Use the following API endpoint to fetch data: `https://jsonplaceholder.typicode.com/posts`

2. **Fetch Data Using Thenables:**
   - In your JavaScript file, write a function that fetches data from the given API using the `.then` syntax.
   - Display the fetched data on your webpage.

3. **Fetch Data Using Async/Await:**
   - In your JavaScript file, write another function that fetches data from the given API using the async/await syntax.
   - Display the fetched data on your webpage.

4. **DOM Interaction:**
   - Create a simple layout to display the fetched data (e.g., a list of posts with titles and bodies).
   - Use JavaScript to dynamically insert the fetched data into the DOM.

5. **Styling:**
   - Style your page uniquely. Do not copy the styles we have used in class.
   - Ensure your page is visually appealing and well-organized.

6. **Submission:**
   - Submit your completed assignment in the group before tomorrow's class. If not submitted on time, there will be no correction.

## Example Code

### HTML (index.html):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Assignment</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Posts</h1>
        <div id="posts"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
### JavaScript (script.js):

```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts');

// Fetch using Thenables
function fetchPostsThenables() {
    // Your code logic goes here
}

// Fetch using Async/Await
async function fetchPostsAsyncAwait() {
    // Your code logic goes here
}

// Display posts in the DOM
function displayPosts(posts, method) {
   // Your code logic goes here
}

// Call both functions to fetch and display posts
fetchPostsThenables();
fetchPostsAsyncAwait();
```