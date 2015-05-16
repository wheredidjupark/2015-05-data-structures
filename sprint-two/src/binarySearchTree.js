var BinarySearchTree = function(value){
  var tree = {};

  tree.value = value;

  tree.insert = function(val){

		if(val > tree.value){
			if(tree.right) {
				tree.right.insert(val);
			}else{
				tree.right = BinarySearchTree(val);
			}
		} else {
			if(tree.left){
				tree.left.insert(val);
			}else{
				tree.left = BinarySearchTree(val);
			}
		}
  };

  tree.contains = function(val){
  	if(this.value === val) return true;

  	var result = false;

  	if(this.left) result = this.left.contains(val);
  	if(this.right) result = result || this.right.contains(val);

  	return result;
/* below code works but is not on par with style guide.
  	return (this.left ? this.left.contains(val) : false)
  	         || (this.right ? this.right.contains(val) : false);
 */
  };

  tree.depthFirstLog = function( func ){
  	func(this.value);
  	if(this.left) this.left.depthFirstLog(func);
  	if(this.right) this.right.depthFirstLog(func);
  };

	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
