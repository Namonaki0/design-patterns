//? Template Method Pattern
// Abstract class defining the template method
class AbstractClass {
  templateMethod() {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  // Abstract methods to be overridden by subclasses
  requiredOperation1() {
    throw new Error("Abstract method not implemented");
  }

  requiredOperation2() {
    throw new Error("Abstract method not implemented");
  }

  // Basic operations with default implementation
  baseOperation1() {
    console.log("AbstractClass: Base operation 1");
  }

  baseOperation2() {
    console.log("AbstractClass: Base operation 2");
  }

  baseOperation3() {
    console.log("AbstractClass: Base operation 3");
  }

  // Hooks with empty/default implementation
  hook1() {}

  hook2() {}
}

// Concrete class implementing the template methods
class ConcreteClass extends AbstractClass {
  requiredOperation1() {
    console.log("ConcreteClass: Implemented operation 1");
  }

  requiredOperation2() {
    console.log("ConcreteClass: Implemented operation 2");
  }

  // Overriding hook method
  hook1() {
    console.log("ConcreteClass: Overridden hook 1");
  }
}

// Example usage
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
