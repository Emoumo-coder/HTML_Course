// /*============== Object ===============*/
console.log("\nObject");

let firstName = "Umar"

function fullnameFormat (firstname, lastname) {
    return `${firstname} ${lastname}`;
}

// Creating object
const person = {
    firstName: "Mark",
    lastName: "Colestra",
    age: 43,
    meal: {
        breakfast: "Beverages",
        lunch: "Rice",
        dinner: "Pizza"
    },
    languages: ["English", "Spanish", "Chineese"],
    speak: function () {
        // return this.firstName + " speak fluently."
        return `${this.firstName} speak fluently!`
    },
    aboutMe: function (params) {
        return `My name is ${fullnameFormat(this.firstName, this.lastName)}, I am ${this.age} years old.`;
    },
    focusText: function () {
        return this.unFocus ? `THis guy is fucking unfocus` : `Great guy!!!!`;
    }
}

// Creating empty object 
const person2 = {}

// Adding properties to object
person2.first_name = "Dart";
person2.last_name = "West";

person.sex = "M";

// Creating object with the new keyword
const person3 = new Object();
person3.firstname = "Vern";
person3.lastname = "fet";

console.log(person3);

// Accessing Object Properties
console.log(person["firstName"]);
console.log(person.firstName);

// access object method
console.log(person.speak());

// deleting object property
person.nationality = "Nigeria";
delete person.nationality;
console.log(person);

// accessing nested object
console.log(person.meal.dinner);
console.log(person.languages[1]);

console.log(person.aboutMe());

// /*============== Object Iheritance ===============*/
console.log("\nObject Iheritance");

const person4 = Object.assign(person); // Iheritance
person4.firstName = "Dragon";
person4.lastName = "Wress";
person4.age = 56;
person4.unFocus = false;

const saviour = Object.assign(person);
saviour.firstName = "Saviour";
saviour.lastName = "Quee";
saviour.unFocus = true;

console.log(person4.aboutMe());
console.log(person4.unFocus);

console.log(saviour.focusText());


// /*============== Object Method ===============*/
console.log("\nObject Method");

console.log(Object.entries(saviour));

console.log(Object.keys(saviour));
console.log(Object.values(saviour));

console.log(person4.hasOwnProperty("unFocus"));

// For-in loop

console.log(person2);

for (let property in person2) {
    console.log(property);
    console.log(person2[property]);
}
console.log("\n\n\nLoop for person4 Object");
// iteration on person3
for (let prop in person4) {
    console.log(prop);
    console.log(person4[prop]);
}

// Destructuring
