//? Observer Pattern
// Subject (observable)
class WeatherStation {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setWeatherData(temperature, humidity, pressure) {
    this.notifyObservers(temperature, humidity, pressure);
  }

  notifyObservers(temperature, humidity, pressure) {
    this.observers.forEach((observer) => {
      observer.update(temperature, humidity, pressure);
    });
  }
}

// Observers
class TemperatureDisplay {
  update(temperature, humidity, pressure) {
    console.log(`Temperature: ${temperature}°C`);
  }
}

class HumidityDisplay {
  update(temperature, humidity, pressure) {
    console.log(`Humidity: ${humidity}%`);
  }
}

class PressureDisplay {
  update(temperature, humidity, pressure) {
    console.log(`Pressure: ${pressure} hPa`);
  }
}

// Usage
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();
const humidityDisplay = new HumidityDisplay();
const pressureDisplay = new PressureDisplay();

weatherStation.addObserver(tempDisplay);
weatherStation.addObserver(humidityDisplay);
weatherStation.addObserver(pressureDisplay);

weatherStation.setWeatherData(25, 60, 1013);
