var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.sizeCount = 0;

  return obj;
};

var queueMethods = {

  //enqueue
  enqueue: function() {
    this.sizeCount++;
  },

  //dequeue
  dequeue: function() {
    this.sizeCount === 0 ? 0 : this.sizeCount--;
  },

  //size

  size: function() {
    return this.sizeCount;
  }

};


