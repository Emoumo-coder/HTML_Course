// I"ve big house
console.log("I\"ve big house");

// Regex for phone number pattern: +234 806 895 0848
/(\+\d{3}) (\d{3}) (\d{3}) (\d{4})$/g

// Work on the regex to martch all these phone numbers:
// 08068950848
// 80-6895-0848
// 80.6895.0848
// 080-6895-0848
// 080 6895 0848

const regex = /(\+234 \d{3} \d{3} \d{4}|\d{11}|(\d{2,3})[-. ]\d{4}[-. ]\d{4})/g;

const phones = [
  "+234 806 895 0848",
  "08068950848",
  "80-6895-0848",
  "80.6895.0848"
];

phones.forEach(phone => {
  console.log(phone, regex.test(phone));
});

// named capturing group
/(?<username>^[a-zA-Z0-9._-]+)(?<at_sign>@)(?<domain>[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g.match()