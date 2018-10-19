var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.queue = {};
  obj.storage = {};
  obj.sizeCount = 0;
  obj.queueSpot = 0;
  obj.storageSpot = 0;

  return obj;
};

var queueMethods = {

  enqueue: function(value) {
    this.queue[this.queueSpot] = value;
    this.sizeCount++;
    this.queueSpot++;
  },

  dequeue: function() {
    this.storage[this.storageSpot] = this.queue[this.storageSpot];
    delete this.queue[this.storageSpot];
    this.sizeCount === 0 ? 0 : this.sizeCount--;
    this.storageSpot++;
    return this.storage[this.storageSpot - 1];
  },

  size: function() {
    return this.sizeCount;
  }

};