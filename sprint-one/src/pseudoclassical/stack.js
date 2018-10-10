var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = {};
  this.sizeCount = 0;

};

// push
Stack.prototype.push = function() {
  this.sizeCount++;
};

// pop

Stack.prototype.pop = function() {
  this.sizeCount === 0 ? 0 : this.sizeCount--;
};

// size
Stack.prototype.size = function() {
  return this.sizeCount;
};

