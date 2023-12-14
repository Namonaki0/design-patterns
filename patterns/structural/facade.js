//? FACADE PATTERN
// Subsystem 1
class Engine {
  start() {
    console.log("Engine started");
  }

  stop() {
    console.log("Engine stopped");
  }
}

// Subsystem 2
class Lights {
  turnOn() {
    console.log("Lights on");
  }

  turnOff() {
    console.log("Lights off");
  }
}

// Subsystem 3
class MusicPlayer {
  playMusic() {
    console.log("Music playing");
  }

  stopMusic() {
    console.log("Music stopped");
  }
}

// Facade
class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.lights = new Lights();
    this.musicPlayer = new MusicPlayer();
  }

  startCar() {
    this.engine.start();
    this.lights.turnOn();
    this.musicPlayer.playMusic();
    console.log("Car started and ready to go!");
  }

  stopCar() {
    this.engine.stop();
    this.lights.turnOff();
    this.musicPlayer.stopMusic();
    console.log("Car stopped");
  }
}

// Client code
const myCar = new CarFacade();

// Using the Facade to start and stop the car
myCar.startCar();
// Output:
// Engine started
// Lights on
// Music playing
// Car started and ready to go!

myCar.stopCar();
// Output:
// Engine stopped
// Lights off
// Music stopped
// Car stopped
