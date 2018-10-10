var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueLine = {};
  this.storage = {};
  this.sizeCount = 0;
  this.queueSpot = 0;
  this.storageSpot = 0;
};

Queue.prototype.enqueue = function(value) {
  this.queueLine[this.queueSpot] = value;
  this.queueSpot++;
  this.sizeCount++;
};

Queue.prototype.dequeue = function() {
  this.storage[this.storageSpot] = this.queueLine[this.storageSpot];
  delete this.queueLine[this.storageSpot];
  this.sizeCount === 0 ? 0 : this.sizeCount--;
  this.storageSpot++;
  return this.storage[this.storageSpot - 1];
};

Queue.prototype.size = function() {
  return this.sizeCount;
};