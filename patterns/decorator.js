//? Decorator Pattern
// Component interface
class Coffee {
  cost() {
    return 5;
  }
}

// Concrete component
class SimpleCoffee extends Coffee {
  cost() {
    return super.cost();
  }
}

// Decorator
class MilkDecorator extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost() + 2;
  }
}

// Decorator
class SugarDecorator extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost() + 1;
  }
}

// Usage
let myCoffee = new SimpleCoffee();
console.log("Cost before decorating:", myCoffee.cost()); // Output: Cost before decorating: 5

myCoffee = new MilkDecorator(myCoffee);
console.log("Cost after adding milk:", myCoffee.cost()); // Output: Cost after adding milk: 7

myCoffee = new SugarDecorator(myCoffee);
console.log("Cost after adding sugar:", myCoffee.cost()); // Output: Cost after adding sugar: 8
