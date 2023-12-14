//? Interpreter Pattern
// Context
class Context {
  constructor() {
    this.variables = {};
  }

  setVariable(variable, value) {
    this.variables[variable] = value;
  }

  getVariable(variable) {
    return this.variables[variable];
  }
}

// Abstract Expression
class AbstractExpression {
  interpret(context) {
    throw new Error("Interpret method must be implemented");
  }
}

// Terminal Expression
class VariableExpression extends AbstractExpression {
  constructor(variable) {
    super();
    this.variable = variable;
  }

  interpret(context) {
    return context.getVariable(this.variable);
  }
}

// Terminal Expression
class ConstantExpression extends AbstractExpression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret(context) {
    return this.value;
  }
}

// Non-terminal Expression
class AdditionExpression extends AbstractExpression {
  constructor(expression1, expression2) {
    super();
    this.expression1 = expression1;
    this.expression2 = expression2;
  }

  interpret(context) {
    return (
      this.expression1.interpret(context) + this.expression2.interpret(context)
    );
  }
}

// Client
const context = new Context();
context.setVariable("a", 5);
context.setVariable("b", 10);

const expression = new AdditionExpression(
  new VariableExpression("a"),
  new ConstantExpression(20)
);

const result = expression.interpret(context);
console.log("Result:", result); // Output: Result: 25
