export function gettingJokesInHtml () {
    const pro = new Promise ((res, rej) => {
        res("I am a custom promise");
    });
    
    const fetchJokes = fetch('https://icanhazdadjoke.com/');
    let sway = "I am sway";
    
    console.log(fetchJokes);
    
    async function fetchJokeFunc () {
        const response = await fetchJokes;
        const responseJson = await response.text();
    
        return responseJson;
    }
    
    (async () => {
        const iframe = document.querySelector('iframe');
        const jokeHtml = await fetchJokeFunc();
        iframe.setAttribute('srcdoc', jokeHtml);
    })();
}

export function gettingJokesAsJSON () {

    const fetchJokesFunc = async () => {

        const fetchJokes = await fetch('https://icanhazdadjoke.com/', {
            method: "GET",
            headers: {
                Accept: "application/json"
                // Accept: "text/plain"
            }
        });

        // const fetchJokesData = await fetchJokes.json();
        const fetchJokesData = await fetchJokes.json();
        console.log(fetchJokesData);
    }

    fetchJokesFunc();
}

export function gettingJokeAsJSON () {

    const fetchJokesFunc = async () => {
        let jokeId = "mW01DA511ob";

        const fetchJokes = await fetch('https://icanhazdadjoke.com/j/' + jokeId, {
            method: "GET",
            headers: {
                Accept: "application/json"
                // Accept: "text/plain"
            }
        });

        // const fetchJokesData = await fetchJokes.json();
        const fetchJokesData = await fetchJokes.json();
        console.log(fetchJokesData);
    }

    fetchJokesFunc();
}

export function postData () {

    const formData = {
        email: 'test@gmail.com',
        name: 'Jane Okohn'
    }

    const postDataFunc = async () => {
        const post = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const response = await post.json();
        console.log(response);
    }

    postDataFunc()
}