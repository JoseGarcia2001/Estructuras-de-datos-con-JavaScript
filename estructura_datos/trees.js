class Node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.leftChild) {
            currentNode.leftChild = newNode;
            return this;
          }
          currentNode = currentNode.leftChild;
        } else {
          if (!currentNode.rightChild) {
            currentNode.rightChild = newNode;
            return this;
          }
          currentNode = currentNode.rightChild;
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (true) {
      if (!currentNode) {
        return console.log("El valor que intentas buscar no existe :/");
      }
      if (currentNode.value === value) {
        return currentNode;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.leftChild;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
    }
  }
}

const myBinarySearchTree = new BinarySearchTree();
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(80);
myBinarySearchTree.insert(130);
myBinarySearchTree.insert(70);
myBinarySearchTree.insert(90);
myBinarySearchTree.insert(110);
myBinarySearchTree.insert(150);
