var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueLine = {};
  this.sizeCount = 0;
};

//enqueue
Queue.prototype.enqueue = function() {
  this.sizeCount++;
};

//dequeue
Queue.prototype.dequeue = function() {

};


// size
Queue.prototype.size = function() {
  return this.sizeCount;
};