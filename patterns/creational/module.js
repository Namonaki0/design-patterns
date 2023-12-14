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
