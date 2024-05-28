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

// Checking relation base on their addresses
people.map((person, index) => {
    const address = person.address;

    const relation = people.map((person2, index2) => {
            const address2 = person2.address;

            if (index !== index2) {
                if (address.city === address2.city && address.street == address2.street && address.zipCode === address2.zipCode) {
                    return true
                }
                
                return false;
            }
            return false
        });

        relation ? console.log("Siblings") : console.log("no-related");
});