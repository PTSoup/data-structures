class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueLine = {};
    this.sizeCount = 0;
  }

  //enqueue
  enqueue() {
    this.sizeCount++;
  }

  //dequeue

  //size
  size() {
    return this.sizeCount;
  }

}
