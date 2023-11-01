//? Constructor Pattern
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the constructor's prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Usage - Creating instances using the constructor
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Calling the method on the instances
person1.sayHello();
person2.sayHello();
