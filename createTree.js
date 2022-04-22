function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const insertValue = (root, q, val) => {
  const node = new TreeNode(val)
  if (root == null) {
    root = node
  } else if (q[0].left == null) {
    q[0].left = node
  } else {
    q[0].right = node
    q.shift()
  }

  q.push(node)
  return [root, q]
}

const buildTreeFromArray = (arr) => {
  let root = null
  let q = []
  for (val of arr) {
    ;[root, q] = insertValue(root, q, val)
  }
  return root
}

module.exports.buildTreeFromArray
