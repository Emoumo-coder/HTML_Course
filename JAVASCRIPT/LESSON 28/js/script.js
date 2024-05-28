// Object  Destructuring 

const obj = {
    name: "Payme",
    color: "orange",
    head: true
}

// console.log(obj.name, obj.color, obj.head);
// destructing 
// destructuring with variable assigment
const {name: myName, color: myColor, head: myHead} = obj;

console.log(myName);
console.log(myColor);
console.log(myHead);

// with destructuring
// const {name, color, head} = obj;

// console.log(name);
// console.log(color);
// console.log(head);

// without destrcuturing
// const name = obj.name;
// const color = obj.color;
// const head = obj.head;


// example of destructure

function colorContent({color, head, name}) {
    return `my best color is ${color} and head is ${head}. My name is ${name}`;
}

console.log(colorContent(obj));


/***************** ******************
 * Classs
*************************************/
console.log("\nClasses");

class Car {
    door;
    wheels;
    color;

    constructor (color) {
        this.color = color;
        this.door = 4;
        this.wheels = 4;
    }

    // Getters and setters
    getDoor () {
        return this.door;
    }

    setDoor (door) {
        this.door =  door;
    }

    engine () {
        return `Vroooonm!!`;
    }
}

const ferrari = new Car("white");
const mercedez = new Car("black");
mercedez.door = 6;

// console.log(ferrari.color);
// console.log(mercedez.color);
// console.log(ferrari.door);
// console.log(mercedez.door);

console.log(ferrari.engine());

// Getters and setters 
mercedez.setDoor(8);
console.log(mercedez.getDoor());