var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeCount = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    sizeCount++;
  };

  someInstance.pop = function() {
    sizeCount === 0? 0 : sizeCount--;
  };

  someInstance.size = function() {
    return sizeCount;
  };

  return someInstance;
};
