var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var queuePosition = 0;
  var nextDelete = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[queuePosition] = value;
    size++;
    queuePosition++;
  };

  someInstance.dequeue = function() {
    storage[nextDelete] = someInstance[nextDelete];
    delete someInstance[nextDelete];
    size === 0 ? 0 : size--;
    nextDelete++;
    return storage[nextDelete - 1];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
