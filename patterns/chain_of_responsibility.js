//? CHAIN OF RESPONSIBILITY PATTERN
// Handler interface
class Handler {
  constructor() {
    this.successor = null;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

// Concrete handlers
class ConcreteHandler1 extends Handler {
  handleRequest(request) {
    if (request === "Handler1") {
      console.log("ConcreteHandler1 handling the request");
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handleRequest(request) {
    if (request === "Handler2") {
      console.log("ConcreteHandler2 handling the request");
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  handleRequest(request) {
    if (request === "Handler3") {
      console.log("ConcreteHandler3 handling the request");
    } else {
      super.handleRequest(request);
    }
  }
}

// Client code
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setSuccessor(handler2);
handler2.setSuccessor(handler3);

// Sending requests
handler1.handleRequest("Handler1"); // Output: ConcreteHandler1 handling the request
handler1.handleRequest("Handler2"); // Output: ConcreteHandler2 handling the request
handler1.handleRequest("Handler3"); // Output: ConcreteHandler3 handling the request
handler1.handleRequest("Handler4"); // Output: (No handler can handle the request)
