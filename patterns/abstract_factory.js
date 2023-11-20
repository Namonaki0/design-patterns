//? Abstract Factory Pattern
// Abstract product classes
class Car {
  constructor() {
    this.type = null;
  }

  describe() {
    console.log(`This is a ${this.type} car.`);
  }
}

class SUV extends Car {
  constructor() {
    super();
    this.type = "SUV";
  }
}

class Sedan extends Car {
  constructor() {
    super();
    this.type = "Sedan";
  }
}

// Abstract factory interface
class CarFactory {
  createCar() {
    throw new Error("createCar method must be implemented");
  }
}

// Concrete factory classes
class SUVFactory extends CarFactory {
  createCar() {
    return new SUV();
  }
}

class SedanFactory extends CarFactory {
  createCar() {
    return new Sedan();
  }
}

// Client code
function orderCar(factory) {
  const car = factory.createCar();
  car.describe();
}

// Usage
const suvFactory = new SUVFactory();
const sedanFactory = new SedanFactory();

orderCar(suvFactory); // Output: This is a SUV car.
orderCar(sedanFactory); // Output: This is a Sedan car.
