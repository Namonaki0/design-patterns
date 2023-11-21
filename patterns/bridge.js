//? BRIDGE PATTERN
// Abstraction
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    throw new Error("Method 'draw' must be implemented");
  }
}

// Implementor
class Color {
  fill() {
    throw new Error("Method 'fill' must be implemented");
  }
}

// Concrete Implementors
class RedColor extends Color {
  fill() {
    return "Red";
  }
}

class BlueColor extends Color {
  fill() {
    return "Blue";
  }
}

// Refined Abstraction
class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `Drawing a ${this.color.fill()} circle`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `Drawing a ${this.color.fill()} square`;
  }
}

// Example usage
const redCircle = new Circle(new RedColor());
const blueSquare = new Square(new BlueColor());

console.log(redCircle.draw()); // Output: Drawing a Red circle
console.log(blueSquare.draw()); // Output: Drawing a Blue square
