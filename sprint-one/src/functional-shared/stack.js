var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.sizeCount = 0;

  _.extend(someInstance, stackMethods);


  return someInstance;


};

var stackMethods = {
  // push an item to the stack
  push: function() {
    this.sizeCount++;
  },

  // pop an item from the stack
  pop: function() {
    this.sizeCount === 0 ? 0 : this.sizeCount--;
  },

  // return the size of an item from the stack
  size: function() {
    return this.sizeCount;
  }


};


// be able to pass the methods into the function
  // needs to take a value and place it in the stack
    // needs to be able to remove that value from the stack (LIFO)
      // return the removed property from the stack
    // also needs to be able to return the size of the stack
