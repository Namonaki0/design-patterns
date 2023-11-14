// Strategy Pattern
// Strategy interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("This method should be overridden");
  }
}

// Concrete strategies
class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber, name, date) {
    super();
    this.cardNumber = cardNumber;
    this.name = name;
    this.date = date;
  }

  pay(amount) {
    console.log(`Paid $${amount} with credit card ${this.cardNumber}`);
  }
}

class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paid $${amount} with PayPal account ${this.email}`);
  }
}

// Context
class ShoppingCart {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    const totalAmount = this.calculateTotal();
    this.paymentStrategy.pay(totalAmount);
  }
}

// Usage
const creditCardPayment = new CreditCardPayment(
  "1234-5678-9012-3456",
  "John Doe",
  "12/23"
);
const payPalPayment = new PayPalPayment("john.doe@example.com");

const shoppingCartWithCreditCard = new ShoppingCart(creditCardPayment);
shoppingCartWithCreditCard.addItem({ name: "Item 1", price: 50 });
shoppingCartWithCreditCard.addItem({ name: "Item 2", price: 30 });
shoppingCartWithCreditCard.checkout();

const shoppingCartWithPayPal = new ShoppingCart(payPalPayment);
shoppingCartWithPayPal.addItem({ name: "Item 3", price: 20 });
shoppingCartWithPayPal.checkout();
