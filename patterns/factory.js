//? Factory Pattern
// Parent class or interface
class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  // Additional methods can be added here
}

// Concrete product classes
class ConcreteProductA extends Product {
  constructor() {
    super("Product A");
  }
}

class ConcreteProductB extends Product {
  constructor() {
    super("Product B");
  }
}

// Factory class
class ProductFactory {
  createProduct(productType) {
    switch (productType) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error("Invalid product type.");
    }
  }
}

// Usage
const factory = new ProductFactory();

const productA = factory.createProduct("A");
console.log(productA.getName()); // Output: Product A

const productB = factory.createProduct("B");
console.log(productB.getName()); // Output: Product B
