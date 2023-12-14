//? Builder pattern
// Product class represents the complex object we want to build
class House {
  constructor() {
    this.floor = 1;
    this.rooms = 0;
    this.hasGarden = false;
  }

  describe() {
    console.log(
      `This house has ${this.floor} floor(s), ${this.rooms} room(s), and ${
        this.hasGarden ? "a" : "no"
      } garden.`
    );
  }
}

// Builder class defines the interface for building different parts of the product
class HouseBuilder {
  constructor() {
    this.house = new House();
  }

  buildFloor(floorCount) {
    this.house.floor = floorCount;
    return this;
  }

  buildRooms(roomCount) {
    this.house.rooms = roomCount;
    return this;
  }

  buildGarden() {
    this.house.hasGarden = true;
    return this;
  }

  getResult() {
    return this.house;
  }
}

// Director class orchestrates the construction process using the builder
class ConstructionDirector {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    return this.builder.buildFloor(2).buildRooms(3).buildGarden().getResult();
  }
}

// Usage
const builder = new HouseBuilder();
const director = new ConstructionDirector(builder);
const myDreamHouse = director.construct();

myDreamHouse.describe();
