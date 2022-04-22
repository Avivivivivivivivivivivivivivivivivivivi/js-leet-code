import createTree from './createTree.mjs'

let root = createTree([3, 9, 20, null, null, 15, 7])

var maxDepth = function (root) {
  if (!root) return 0
  return 1 + max(maxDepth(root.left), maxDepth(root.right))
}

const max = (a, b) => {
  if (a > b) return a
  return b
}

console.log(maxDepth(root))
root = createTree([1, null, 2])
console.log(maxDepth(root))
