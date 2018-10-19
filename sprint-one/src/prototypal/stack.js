var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(stackMethods);
  obj.someInstance = {};
  obj.storage = {};
  obj.sizeCount = 0;

  return obj;

};

var stackMethods = {

  push: function(value) {
    this.someInstance[this.sizeCount] = value;
    this.sizeCount++;
  },

  pop: function() {
    this.storage[0] = this.someInstance[this.sizeCount - 1];
    delete this.someInstance[this.sizeCount - 1];
    this.sizeCount === 0 ? 0 : this.sizeCount--;
    return this.storage[0];
  },

  size: function() {
    return this.sizeCount;
  }

};


