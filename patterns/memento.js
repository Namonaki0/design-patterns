// Memento Pattern
// Originator: The object whose state needs to be saved
class Editor {
  constructor() {
    this.content = "";
  }

  createMemento() {
    return new Memento(this.content);
  }

  restoreMemento(memento) {
    this.content = memento.getState();
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Memento: The object that stores the state of the Originator
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Caretaker: Manages and keeps track of the Mementos
class History {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// Example usage
const editor = new Editor();
const history = new History();

// Save the initial state
history.addMemento(editor.createMemento());

// Make changes to the content
editor.setContent("First version");
console.log("Current content:", editor.getContent());

// Save the state after the first change
history.addMemento(editor.createMemento());

// Make more changes
editor.setContent("Second version");
console.log("Current content:", editor.getContent());

// Restore to the first version
editor.restoreMemento(history.getMemento(0));
console.log("Restored content:", editor.getContent());
