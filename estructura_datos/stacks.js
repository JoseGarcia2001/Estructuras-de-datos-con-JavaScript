class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.bottom) {
      this.bottom = newNode;
      this.top = newNode;
      this.length++;

      return this;
    }

    this.top.next = newNode;
    this.top = newNode;

    this.length++;

    return this;
  }

  peek() {
    return this.top;
  }

  walkStack() {
    let counter = 0;
    let length = this.length - 2;
    let currentNode = this.bottom;

    while (counter !== length) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  pop() {
    if (this.length === 0) {
      return console.log("El Stack ya está vacio");
    }

    if (this.length === 1) {
      const nodeToPop = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      return nodeToPop;
    }

    const nodeToPop = this.top;
    const newTop = this.walkStack();
    this.top = newTop;

    this.length--;

    return nodeToPop;
  }
}

const myStack = new Stack();
myStack.push(1);
