//? Prototype Pattern
const personPrototype = {
  init: function (name, age) {
    this.name = name;
    this.age = age;
  },
  sayHello: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

// Creating instances by cloning the prototype
const person1 = Object.create(personPrototype);
person1.init("Alice", 30);

const person2 = Object.create(personPrototype);
person2.init("Bob", 25);

// Usage - Calling the method on the instances
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
