//? Visitor Pattern
// Element interface
class Element {
  accept(visitor) {
    throw new Error("accept method must be implemented");
  }
}

// Concrete elements
class ConcreteElementA extends Element {
  accept(visitor) {
    visitor.visitConcreteElementA(this);
  }

  operationA() {
    console.log("ConcreteElementA operationA");
  }
}

class ConcreteElementB extends Element {
  accept(visitor) {
    visitor.visitConcreteElementB(this);
  }

  operationB() {
    console.log("ConcreteElementB operationB");
  }
}

// Visitor interface
class Visitor {
  visitConcreteElementA(element) {
    throw new Error("visitConcreteElementA method must be implemented");
  }

  visitConcreteElementB(element) {
    throw new Error("visitConcreteElementB method must be implemented");
  }
}

// Concrete visitor
class ConcreteVisitor extends Visitor {
  visitConcreteElementA(element) {
    console.log("ConcreteVisitor is visiting ConcreteElementA");
    element.operationA();
  }

  visitConcreteElementB(element) {
    console.log("ConcreteVisitor is visiting ConcreteElementB");
    element.operationB();
  }
}

// Example usage
const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor();

for (const element of elements) {
  element.accept(visitor);
}
