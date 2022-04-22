import createTree from './createTree.mjs'

const root = createTree([1, 2, 2, 3, 4, 4, 3])

var isSymmetric = function (root) {
  const areNodesSymetric = (left, right) => {
    if (left == null && right == null) return true
    if (left == null || right == null) return false
    if (left.val !== right.val) return false

    return (
      areNodesSymetric(left.left, right.right) &&
      areNodesSymetric(left.right, right.left)
    )
  }

  return areNodesSymetric(root.left, root.right)
}

console.log(isSymmetric(root))
