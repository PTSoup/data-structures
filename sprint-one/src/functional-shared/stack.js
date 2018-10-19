var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var callStack = {};
  callStack.someInstance = {};
  callStack.storage = {};
  callStack.sizeCount = 0;

  _.extend(callStack, stackMethods);

  return callStack;

};

var stackMethods = {
  // push an item to the stack
  push: function(value) {
    this.someInstance[this.sizeCount] = value;
    this.sizeCount++;
  },

  // pop an item from the stack
  pop: function() {
    this.storage[0] = this.someInstance[this.sizeCount - 1];
    delete this.someInstance[this.sizeCount - 1];
    this.sizeCount === 0 ? 0 : this.sizeCount--;
    return this.storage[0];
  },

  // return the size of an item from the stack
  size: function() {
    return this.sizeCount;
  }

};