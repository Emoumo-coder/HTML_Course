// let person1 = {
//     name: "Alice Smith",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Springfield",
//         zipCode: "12345"
//     }
// };

/*
// format for each person about:

Hello 👋🏽, 
I am [fullname], I am [age] years of age. I am specialized in coding stuffs. I am from [street], [city]. zip code: [zipCode]. In case you need my service!
*/

const people = [
    {
        name: "Alice Smith",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Springfield",
            zipCode: "12345"
        },
        about: function () {
            return `Hello 👋🏽, 
            I am ${this.name}, I am ${this.age} years of age. I am specialized in coding stuffs. I am from ${this.address.street}, ${this.address.city}. zip code: ${this.address.zipCode}. In case you need my service!`;
        }
    },
    {
        name: "John Marth",
        age: 32,
        address: {
            street: "204 Mai Flt St",
            city: "Chigago",
            zipCode: "28282"
        },
        about: function () {
            return `Hello 👋🏽, 
            I am ${this.name}, I am ${this.age} years of age. I am specialized in coding stuffs. I am from ${this.address.street}, ${this.address.city}. zip code: ${this.address.zipCode}. In case you need my service!`;
        }
    },
    {
        name: "Rebbaca Williams",
        age: 40,
        address: {
            street: "123 Main St",
            city: "Springfield",
            zipCode: "12345"
        },
        about: function () {
            return `Hello 👋🏽, 
            I am ${this.name}, I am ${this.age} years of age. I am specialized in coding stuffs. I am from ${this.address.street}, ${this.address.city}. zip code: ${this.address.zipCode}. In case you need my service!`;
        }
    },
    
];

// console.log(people[0].about());
// console.log(people[1].about());
// console.log(people[2].about());

people.forEach(function (person, index, array) {
    console.log(person.about());
})

// Checking relation based on their addresses
people.forEach(function (person, index) {
    const address = person.address;

    const relations = people.map((person2, index2) => {
        if (index !== index2) {
            const address2 = person2.address;
            return address.city === address2.city && address.street === address2.street && address.zipCode === address2.zipCode;
        }
        return false;
    });

    const isSibling = relations.includes(true);
    console.log(isSibling ? "Siblings" : "no-related");
});

// Checking relation based on their addresses -- using the some
people.forEach(function (person, index) {
    const address = person.address;

    const isSibling = people.some((person2, index2) => {
        if (index !== index2) {
            const address2 = person2.address;
            return address.city === address2.city && address.street === address2.street && address.zipCode === address2.zipCode;
        }
        return false;
    });

    console.log(isSibling ? "Siblings" : "no-related");
});