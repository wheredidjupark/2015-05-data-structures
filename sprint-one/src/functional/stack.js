var Stack = function(){
  var someInstance = {};
  //track the size of the stack
  var size = 0;
  var top = -1;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    size++;
    top++;
    storage[top] = value;
  };

  someInstance.pop = function(){
    if(size > 0){
      var value = storage[top];
      delete storage[top];
      top--;
      size--;
      return value;
    }
  };

  someInstance.size = function(){
    //return the size of the stack
    return size;
  };

  return someInstance;
};
