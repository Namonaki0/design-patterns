//? Adapter Pattern
// Target interface
class Target {
  request() {
    return "Target request";
  }
}

// Adaptee (the class we want to adapt)
class Adaptee {
  specificRequest() {
    return "Adaptee specific request";
  }
}

// Adapter
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this._adaptee = adaptee;
  }

  request() {
    return this._adaptee.specificRequest();
  }
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

console.log(adapter.request()); // Output: Adaptee specific request
