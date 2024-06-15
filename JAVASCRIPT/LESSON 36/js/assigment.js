const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const postsContainer = document.getElementById('posts');

// Fetch using Thenables
function fetchPostsThenables() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            displayPosts(posts, 'Thenables');
        })
        .catch(error => console.error('Error fetching posts:', error));
}

// Fetch using Async/Await
async function fetchPostsAsyncAwait() {
    try {
        const response = await fetch(apiUrl);
        const posts = await response.json();
        displayPosts(posts, 'Async/Await');
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Display posts in the DOM
function displayPosts(posts, method) {
    postsContainer.innerHTML += `<h2>Fetched with ${method}</h2>`;
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Call both functions to fetch and display posts
fetchPostsThenables();
fetchPostsAsyncAwait();