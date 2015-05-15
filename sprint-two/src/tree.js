var Tree = function(value){
  var newTree = {};
  newTree.value = value;//"node"

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node){
  node = node || this;

  return (node.value === target) || _.reduce(node.children, function(found, child){
    return found || node.contains(target, child);
  }, false);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
