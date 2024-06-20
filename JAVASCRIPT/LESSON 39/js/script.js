const validateEmailInput = document.getElementById('validateEmailInput');

validateEmailInput.addEventListener('input', () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let textInput = validateEmailInput.value;
  const found = emailRegex.test(textInput);
  const hint = document.querySelector('.hint');
  
  if (!found && textInput.length) {
    hint.classList.remove('hide-hint');
    hint.classList.add('show-hint');
  } else {
    hint.classList.remove('show-hint');
      hint.classList.add('hide-hint');
  }
  // console.log(validateEmailInput.value);
});

// White spaces removal pattern
const text = "   Lagos                              Nigeria.";

const searchSpaces = /\s{2,}/g;

console.log(text.replace(searchSpaces, " ").trim());

// match method
const numberRegex = /\d+/g;
const testString = 'There are 123 apples and 456 oranges.';

const numbers = testString.match(numberRegex);
console.log(numbers);

// anaconda(1980)
