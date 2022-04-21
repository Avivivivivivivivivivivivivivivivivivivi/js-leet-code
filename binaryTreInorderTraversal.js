function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 var inorderTraversalRec = function(root) {
   if(!root) return []
   if(root.left && !root.right) return [...inorderTraversal(root.left), root.val]
   if(!root.left && root.right) return [ root.val,...inorderTraversal(root.right)]
   if(!root.left && !root.right) return [root.val]
   return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

var inorderTraversalIt = function(root) {
  let current = root;
  let temp = []
  let res = []
  while(current || res.length){
    while(current){
      temp.push(current)
      current = current.left
    }
    current = temp.pop()
    res.push(current.val)
    current = current.right
  }
  return res
};

var inorderTraversal = function(root) {
  let current = root;
  let res = []
  let temp;
  while(current){
    if(!current.left){
      res.push(current.val)
      current = current.right
    }else {
      temp = current.left
      while(temp.right){
        temp = temp.right
      }
      temp.right = current
      let tmp = current
      current = current.left
      tmp.left  = null
    }
  }
  return res
};
