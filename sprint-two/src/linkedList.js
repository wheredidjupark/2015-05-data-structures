
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);

    if(!this.tail){
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node; //
      this.tail = node;
    }

  };

  list.removeHead = function(){
    //var temp = this.head;
    var newHead = this.head.next;
    var prevHeadVal = this.head.value;
    delete this.head; //good or bad for performance?
    this.head = newHead;

    return prevHeadVal;
  };

  list.contains = function(target){

    var pos = this.head;

    while(pos){ // no pos.next!
      if(pos.value === target){
        return true;
      } else {
        pos = pos.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
