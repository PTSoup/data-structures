var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeCount = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[sizeCount] = value;
    sizeCount++;
  };

  someInstance.pop = function() {
    storage[sizeCount - 1] = someInstance[sizeCount - 1];
    delete someInstance[sizeCount - 1];
    sizeCount === 0 ? 0 : sizeCount--;
    return storage[sizeCount];
  };

  someInstance.size = function() {
    return sizeCount;
  };

  return someInstance;
};