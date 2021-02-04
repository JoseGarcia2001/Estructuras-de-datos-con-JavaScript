class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  searchNode(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insertByIndex(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const holeToInsert = this.searchNode(index);
    const newNode = new Node(value);
    newNode.next = holeToInsert.next;
    newNode.prev = holeToInsert;
    holeToInsert.next = newNode;

    return this;
  }

  deleteFirst() {
    const nodeToDelete = this.head;
    this.head = this.head.next;
    this.head.prev = null;

    this.length--;
    return nodeToDelete;
  }

  deleteLast() {
    const nodeToDelete = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;

    return nodeToDelete;
  }

  deleteByIndex(index) {
    if (index >= this.length - 1) {
      return this.deleteLast();
    }
    if (index === 0) {
      return this.deleteFirst();
    }

    const nodeToDelete = this.searchNode(index);
    const previousNode = nodeToDelete.prev;
    const laterNode = nodeToDelete.next;
    laterNode.prev = previousNode;
    previousNode.next = laterNode;

    this.length--;

    return nodeToDelete;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);
