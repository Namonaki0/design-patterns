//? STATE PATTERN
// Context - the object that will change its behavior based on internal state
class Order {
  constructor() {
    this.state = new PendingState(this);
  }

  setState(state) {
    this.state = state;
  }

  process() {
    this.state.process();
  }
}

// State interface - defines the methods that concrete states must implement
class OrderState {
  constructor(order) {
    this.order = order;
  }

  process() {
    // To be overridden by concrete states
  }
}

// Concrete state 1
class PendingState extends OrderState {
  process() {
    console.log("Order is pending. Processing...");
    // Perform processing tasks specific to pending state

    // Transition to the next state
    this.order.setState(new ShippedState(this.order));
  }
}

// Concrete state 2
class ShippedState extends OrderState {
  process() {
    console.log("Order is shipped. Processing...");
    // Perform processing tasks specific to shipped state

    // Transition to the next state
    this.order.setState(new DeliveredState(this.order));
  }
}

// Concrete state 3
class DeliveredState extends OrderState {
  process() {
    console.log("Order is delivered. Processing...");
    // Perform processing tasks specific to delivered state

    // No transition as it is the final state
  }
}

// Example usage
const order = new Order();

order.process(); // Output: Order is pending. Processing...
order.process(); // Output: Order is shipped. Processing...
order.process(); // Output: Order is delivered. Processing...
