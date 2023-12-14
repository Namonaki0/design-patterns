//? PROXY PATTERN
// RealSubject - The actual object that the Proxy represents
class RealSubject {
  request() {
    console.log("RealSubject: Handling request");
  }
}

// Proxy - Controls access to the RealSubject
class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    // Additional logic can be added here before forwarding the request to the RealSubject
    console.log("Proxy: Logging the request before forwarding");

    // Forward the request to the RealSubject
    this.realSubject.request();
  }
}

// Example usage
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

// The client interacts with the Proxy, which in turn interacts with the RealSubject
proxy.request();
