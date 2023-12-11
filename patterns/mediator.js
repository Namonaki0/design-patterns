//? Mediator Pattern
// Mediator
class ChatMediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender) {
    this.users.forEach((user) => {
      // Don't send the message back to the sender
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

// Colleague
class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(message) {
    console.log(`${this.name} sends message: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message) {
    console.log(`${this.name} receives message: ${message}`);
  }
}

// Example usage
const mediator = new ChatMediator();

const user1 = new User("User 1", mediator);
const user2 = new User("User 2", mediator);
const user3 = new User("User 3", mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

user1.sendMessage("Hello, everyone!");
user2.sendMessage("Hi there!");
