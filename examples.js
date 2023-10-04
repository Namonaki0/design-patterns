//? Singleton Pattern

const Singleton = (() => {
  let instance;

  function createInstance() {
    // Private properties and methods
    const privateVariable = "I am a private variable";

    function privateMethod() {
      return "I am a private method";
    }

    return {
      // Public methods and properties
      publicMethod: () => {
        console.log("Public method");
      },
      publicVariable: "I am a public variable",

      getPrivateVariable: () => {
        return privateVariable;
      },
      getPrivateMethod: () => {
        return privateMethod();
      },
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true

instance1.publicMethod(); // Output: Public method
console.log(instance1.publicVariable); // Output: I am a public variable
console.log(instance1.getPrivateVariable()); // Output: I am a private variable
console.log(instance1.getPrivateMethod()); // Output: I am a private variable

// Module Pattern

// Factory Pattern

// Constructor Pattern

// Prototype Pattern

// Observer Pattern

// Decorator Pattern

// Adapter Pattern

// Command Pattern

// Memento Pattern

// Composite Pattern

// Strategy Pattern
