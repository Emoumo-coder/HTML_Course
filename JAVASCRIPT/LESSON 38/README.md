# Lesson 38 Objective

## Topics

### Regex
- **Introduction to Regex**
  - Definition and Use Cases
  - Basic Syntax Overview

- **Regex Patterns and Modifiers**
  - **Literals and Meta-Characters**
    - Characters: `\w`, `\d`, `\s`, `\W`, `\D`, `\S`
    - Special Characters: `.`, `*`, `+`, `?`, `^`, `$`, `[]`, `()`, `|`, `{}`, `\`

  - **Quantifiers**
    - `*` (0 or more)
    - `+` (1 or more)
    - `?` (0 or 1)
    - `{n}` (exactly n)
    - `{n,}` (n or more)
    - `{n,m}` (between n and m)

  - **Anchors**
    - `^` (start of string)
    - `$` (end of string)
  
  - **Groups and Ranges**
    - Character Classes `[abc]`
    - Negated Character Classes `[^abc]`
    - Ranges `[a-z]`
    - Grouping with Parentheses `(abc)`
    - Non-capturing Groups `(?:abc)`
  
  - **Escaping Special Characters**
    - Using `\` to escape special characters

- **Regex Methods in JavaScript**
  - `RegExp.prototype.test()`
  - `RegExp.prototype.exec()`
  - String Methods
    - `String.prototype.match()`
    - `String.prototype.matchAll()`
    - `String.prototype.replace()`
    - `String.prototype.search()`
    - `String.prototype.split()`

- **Flags**
  - `g` (global)
  - `i` (case-insensitive)
  - `m` (multi-line)
  - `s` (dotall, `.` matches newline)
  - `u` (unicode)
  - `y` (sticky)

- **Practical Examples**
  - Validating Email Addresses
  - Validating Phone Numbers
  - Extracting URLs from Text
  - Finding and Replacing Text
  - Splitting Strings

Here is an example illustrating these concepts:

```javascript
// Example: Validating an email address
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const testEmail = 'test@example.com';

console.log(emailRegex.test(testEmail)); // true

// Example: Extracting all numbers from a string
const numberRegex = /\d+/g;
const testString = 'There are 123 apples and 456 oranges.';

const numbers = testString.match(numberRegex);
console.log(numbers); // ['123', '456']

// Example: Replacing all instances of a word in a string
const replaceRegex = /apples/gi;
const newString = testString.replace(replaceRegex, 'bananas');
console.log(newString); // 'There are 123 bananas and 456 oranges.'

**String.prototype.split()**
`The 'split()' method is used to divide a string into an array of substrings, based on a specified delimiter.`

// Example: Splitting a sentence into words
const sentence = "Hello world! This is an example.";
const words = sentence.split(" ");
console.log(words); // Output: ["Hello", "world!", "This", "is", "an", "example."]

**String.prototype.matchAll()**
The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.

// Example: Finding all words that start with a capital letter
const text = "The Quick Brown Fox Jumps Over The Lazy Dog.";
const regex = /\b[A-Z][a-z]*\b/g;
const matches = text.matchAll(regex);

for (const match of matches) {
    console.log(match[0]);
}

// Output:
// The
// Quick
// Brown
// Fox
// Jumps
// Over
// The
// Lazy
// Dog

**RegExp.prototype.exec()**
"The exec() method executes a search for a match in a specified string. It returns an array of information or null if no match is found."

// Example: Finding all numbers in a string
const str = "The order numbers are 1234, 5678, and 91011.";
const regex = /\d+/g;
let match;

while ((match = regex.exec(str)) !== null) {
    console.log(`Found ${match[0]} at index ${match.index}`);
}

// Output:
// Found 1234 at index 21
// Found 5678 at index 27
// Found 91011 at index 37
