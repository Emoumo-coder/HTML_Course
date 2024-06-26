

// White spaces removal pattern
const text = "   Lagos                              Nigeria.";

const searchSpaces = /\s{2,}/g;

const inputText = encodeURI(text);
const inputTextEscaped = encodeURI(text.replace(searchSpaces, " ").trim());

console.log(inputText);
console.log(inputTextEscaped);

// match method
const numberRegex = /\d+/g;
const testString = 'There are 123 apples and 456 oranges.';

const numbers = testString.match(numberRegex);
console.log(numbers);

// exec method
const str = "The order numbers are 1234, 5678, and 91011.";
const regex = /\d+/g;
let match;

// let i = 0
// while (i < 10) {
//   console.log(i);
//   i++;
// }


// console.log(regex.exec(str));

while ((match = execute(regex, str)) !== null) {
    console.log(`Found ${match[0]} at index ${match.index}`);
}

// anaconda(1980)
// const text2 = 'anaconda(1980)';
// console.log(/(?<movie_name>^\w+)\((?<movie_year>\w+)\)/g.exec(text2));

/**
 * 
 * @param {* Regex} regex 
 * @param {* string} str 
 * @returns 
 */
function execute (regex, str) {
  return regex.exec(str);
}


// exec method practical example

// anaconda - sg(1980).mkv - Anaconda(02-10-1980).mp4
const movie = 'Anaconda2 - sg(02-10-1980).mkv';

const movieRegex = /(?<movie_name>^[a-zA-z-0-9 ]+)\((?<movie_year>[\-0-9]+)\)\.(?<movie_extension>[a-z0-9]+)/g

const matchedMovie = movieRegex.exec(movie);

console.log(matchedMovie);


const template = "The movie name is [name], the production year is [year] and the extension is : [extension]";


// const movieGroups = matchedMovie.map((match) => {
//   return match;
// })

const movieGroup = matchedMovie['groups'];

const formattedText = ({movie_name, movie_year, movie_extension}) => {
  return `The movie name is ${movie_name}, the production year is ${movie_year} and the extension is : ${movie_extension}`;
}

console.log(formattedText(movieGroup));



const validateMovieInput = document.getElementById('validateMovieInput');

validateMovieInput.addEventListener('input', () => {
  
  let textInput = validateMovieInput.value;
});

const movieForm = document.getElementById('movieForm');

movieForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = validateMovieInput.value;

  const matchedMovie = movieRegex.exec(input);
 
  if (matchedMovie) {

    const movieGroup = matchedMovie['groups'];
  
    const formattedText = ({movie_name, movie_year, movie_extension}) => {
      return `The movie name is ${movie_name}, the production year is ${movie_year} and the extension is : ${movie_extension}`;
    }
  
    console.log(formattedText(movieGroup));
  } else {
    console.log("The input doesn't match the movie search pattern.");
  }
});






console.log(/(?<movie_name>^\w+)\((?<movie_year>\w+)\)/g.exec(movie));
