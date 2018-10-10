class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.callStack = {};
    this.storage = {};
    this.sizeCount = 0;
  }

  // push
  push() {
    this.sizeCount++;
  }

  //pop
  pop() {
    this.sizeCount === 0 ? 0 : this.sizeCount--;
  }

  //size
  size() {
    return this.sizeCount;
  }


}