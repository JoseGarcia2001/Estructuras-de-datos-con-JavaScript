class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  addItem(key, value) {
    const address = this.hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  getItem(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  deleteItem(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedBucket = currentBucket[i];
          currentBucket.splice(i, 1);
          return deletedBucket;
        }
      }
    }

    return undefined;
  }

  getAllItems() {
    const allBuckets = [];
    for (const bucket of this.data) {
      if (bucket) {
        if (bucket.length > 0) {
          allBuckets.push(bucket);
        }
      }
    }
    return allBuckets;
  }
}

const myHashTable = new HashTable(50);

myHashTable.addItem("Jose", 30);
myHashTable.addItem("Juan", 15);
myHashTable.addItem("Pedro", 20);
