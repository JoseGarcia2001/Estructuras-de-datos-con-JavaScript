class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const holeToInsert = this.getTheIndex(index);
    newNode.next = holeToInsert.next;
    holeToInsert.next = newNode;
    this.length++;

    return this;
  }

  deleteFirstNode() {
    const deletedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return deletedNode;
  }

  deleteLastNode() {
    const nodeToDelete = this.getTheIndex(this.length - 1);
    const newTail = this.getTheIndex(this.length - 2);
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return nodeToDelete;
  }

  deleteByIndex(index) {
    if (index >= this.length) {
      return this.deleteLastNode();
    }

    if (index === 0) {
      return this.deleteFirst;
    }

    const nodeToDelete = this.getTheIndex(index);
    const nodeToInsertAgain = this.getTheIndex(index - 1);
    nodeToInsertAgain.next = nodeToDelete.next;
    this.length--;
    return nodeToDelete;
  }
}

const mySinglyLinkedList = new SinglyLinkedList(1);
mySinglyLinkedList.append(2);
mySinglyLinkedList.append(3);
mySinglyLinkedList.append(4);
mySinglyLinkedList.append(5);
