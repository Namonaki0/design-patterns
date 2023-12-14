//? FLYWEIGHT
// Flyweight Factory
class CoffeeFlavorFactory {
  constructor() {
    this.flavors = {};
  }

  getCoffeeFlavor(flavorName) {
    if (!this.flavors[flavorName]) {
      this.flavors[flavorName] = new CoffeeFlavor(flavorName);
    }
    return this.flavors[flavorName];
  }

  getTotalCoffeeFlavorsMade() {
    return Object.keys(this.flavors).length;
  }
}

// Flyweight
class CoffeeFlavor {
  constructor(flavor) {
    this.flavor = flavor;
  }

  serveCoffee(tableNumber) {
    console.log(
      `Serving coffee flavor ${this.flavor} to table #${tableNumber}`
    );
  }
}

// Client
const coffeeFlavorFactory = new CoffeeFlavorFactory();

function orderCoffee(flavor, tableNumber) {
  const coffeeFlavor = coffeeFlavorFactory.getCoffeeFlavor(flavor);
  coffeeFlavor.serveCoffee(tableNumber);
}

// Client orders
orderCoffee("Caramel", 1);
orderCoffee("Espresso", 2);
orderCoffee("Caramel", 3);
orderCoffee("Espresso", 4);

console.log(
  `Total Coffee Flavors made: ${coffeeFlavorFactory.getTotalCoffeeFlavorsMade()}`
);
