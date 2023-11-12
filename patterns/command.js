// Command Pattern
// Receiver: The object that will perform the actual action
class Light {
  turnOn() {
    console.log("Light is ON");
  }

  turnOff() {
    console.log("Light is OFF");
  }
}

// Command interface: Defines the common interface for all concrete commands
class Command {
  execute() {}
}

// Concrete Command: Implements the execute method by invoking the corresponding operation on the receiver
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

// Concrete Command: Implements the execute method by invoking the corresponding operation on the receiver
class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker: Asks the command to execute the request
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Output: Light is ON

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Output: Light is OFF
