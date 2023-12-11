//? Iterator Pattern
// Define a simple collection
function SimpleCollection() {
  this.items = [];
}

// Add a method to the collection to add items
SimpleCollection.prototype.addItem = function (item) {
  this.items.push(item);
};

// Implement the Iterator protocol
SimpleCollection.prototype[Symbol.iterator] = function () {
  let index = 0;

  // Return an iterator object
  return {
    // The next() method returns an object with a 'value' and 'done' property
    next: () => {
      if (index < this.items.length) {
        return { value: this.items[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
};

// Example usage
const collection = new SimpleCollection();
collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

// Use the iterator to iterate over the collection
const iterator = collection[Symbol.iterator]();
let iterationResult = iterator.next();

while (!iterationResult.done) {
  console.log(iterationResult.value);
  iterationResult = iterator.next();
}
