// Composite Pattern
// Component interface
class Graphic {
  print() {
    throw new Error("You should implement this method");
  }
}

// Leaf class
class Circle extends Graphic {
  constructor(name) {
    super();
    this.name = name;
  }

  print() {
    console.log(`Circle: ${this.name}`);
  }
}

// Composite class
class CompositeGraphic extends Graphic {
  constructor(name) {
    super();
    this.name = name;
    this.graphics = [];
  }

  add(graphic) {
    this.graphics.push(graphic);
  }

  remove(graphic) {
    const index = this.graphics.indexOf(graphic);
    if (index !== -1) {
      this.graphics.splice(index, 1);
    }
  }

  print() {
    console.log(`Composite: ${this.name}`);
    this.graphics.forEach((graphic) => graphic.print());
  }
}

// Usage
const circle1 = new Circle("Red Circle");
const circle2 = new Circle("Green Circle");
const composite = new CompositeGraphic("Composite Shape");

composite.add(circle1);
composite.add(circle2);

const circle3 = new Circle("Blue Circle");
const composite2 = new CompositeGraphic("Composite Shape 2");
composite2.add(circle3);

composite.add(composite2);

composite.print();
