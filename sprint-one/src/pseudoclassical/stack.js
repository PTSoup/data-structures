var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.callStack = {};
  this.storage = {};
  this.sizeCount = 0;

};

Stack.prototype.push = function(value) {
  this.callStack[this.sizeCount] = value;
  this.sizeCount++;
};

Stack.prototype.pop = function() {
  this.storage[0] = this.callStack[this.sizeCount - 1];
  delete this.callStack[this.sizeCount - 1];
  this.sizeCount === 0 ? 0 : this.sizeCount--;
  return this.storage[0];
};

Stack.prototype.size = function() {
  return this.sizeCount;
};