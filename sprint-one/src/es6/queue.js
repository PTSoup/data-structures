class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueLine = {};
    this.storage = {};
    this.sizeCount = 0;
    this.queueSpot = 0;
    this.storageSpot = 0;
  }

  enqueue(value) {
    this.queueLine[this.queueSpot] = value;
    this.queueSpot++;
    this.sizeCount++;
  }

  dequeue() {
    this.storage[this.storageSpot] = this.queueLine[this.storageSpot];
    delete this.queueLine[this.storageSpot];
    this.storageSpot++;
    this.sizeCount === 0 ? 0 : this.sizeCount--;
    return this.storage[this.storageSpot - 1];
  }

  size() {
    return this.sizeCount;
  }
}
