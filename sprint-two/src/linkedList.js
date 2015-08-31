
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
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

  }; // O(1)

  list.addToHead = function(value){
    var node = Node(value);

    if(!this.head){
      this.tail = node;
      this.head = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
  };

  list.removeHead = function(){
    if(!this.head) return;
    var newHead = this.head.next;
    var prevHeadVal = this.head.value;
    delete this.head; //good or bad for performance?
    this.head = newHead;
    if(this.head) this.head.previous = null;

    return prevHeadVal;
  }; // O(1)

  list.removeTail = function(){
    if(!this.tail) return;
    var newTail = this.tail.previous;
    var oldTailValue = this.tail.value;
    delete this.tail;
    this.tail = newTail;
    if(this.tail) this.tail.next = null;
    return oldTailValue;
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
  }; // O(n)

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
