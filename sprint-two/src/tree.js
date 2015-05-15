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
  var results = [];
  if(node.value === target){
    return true;
  }

  for(var i = 0; i < node.children.length; i++){
    results.push(this.contains(target, node.children[i]));
  }

  return _.some(results,function(value){
    return value === true;
  });

/*
  _.reduce(node.children,function(){

  });
*/

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
