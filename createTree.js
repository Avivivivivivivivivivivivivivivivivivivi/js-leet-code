function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const buildTreeFromArray = (arr) => {
  if (!arr.length) return new TreeNode();
  const root = new TreeNode(arr.shift());
  let it = 1;
  for (let i = 1; i < arr.length; i++) {
    let temp = new TreeNode(arr[i]);
    if (i + i <= arr.length) temp.left = new TreeNode(arr[i + i - 1]);
    if (i + i < arr.length) temp.right = new TreeNode(arr[i + i]);
  }
  return root;
};

console.log(buildTreeFromArray([]));

module.exports.buildTreeFromArray;

// 0               1
// 1          2          3
// 2        4    5     6     7
// 4      8  9 10 11 12 13  14  15
//     16 17
