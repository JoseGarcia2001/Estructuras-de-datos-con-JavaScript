class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  peek() {
    return this.head;
  }

  enqueue(value) {
    if (!value) {
      return console.log("Por favor ingresa un valor :D");
    }

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return console.log("Lo siento! La cola ya está vacia");
    }

    if (this.length === 1) {
      this.tail = null;
    }

    const nodeDequeued = this.head;

    this.head = this.head.next;
    this.length--;

    return nodeDequeued;
  }
}

const myQueue = new Queue();
