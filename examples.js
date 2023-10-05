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

// ####################################################

//? Module Pattern
const MyModule = (() => {
  // Private members
  let privateVariable = 10;

  const privateMethod = () => {
    return "Private method";
  };

  const getPrivateVariable = () => {
    return privateVariable;
  };

  // Public members
  const publicVariable = 20;

  const publicMethod = () => {
    console.log("Public method");
    console.log("Accessing private variable:", privateVariable);
    console.log("Calling private method:", privateMethod());
  };

  return {
    // Expose public members
    publicVariable,
    publicMethod,
    getPrivateVariable,
  };
})();

// Usage
console.log(MyModule.publicVariable); // Accessing public variable
MyModule.publicMethod(); // Calling public method

console.log(MyModule.privateVariable); // Undefined (private variable not accessible)
console.log(MyModule.privateMethod()); // Error (private method not accessible)

console.log(MyModule.getPrivateVariable()); // Accessing private variable through a public method

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
