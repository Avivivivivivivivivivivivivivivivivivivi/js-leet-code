export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const insertValue = (root, nodeQueue, val) => {
  const node = new TreeNode(val)
  if (root == null) {
    root = node
  } else if (nodeQueue[0].left == null) {
    nodeQueue[0].left = node
  } else {
    nodeQueue[0].right = node
    nodeQueue.shift()
  }

  nodeQueue.push(node)
  return [root, nodeQueue]
}

const buildTreeFromArray = (arr) => {
  let root = null
  let nodeQueue = []
  for (let val of arr) {
    ;[root, nodeQueue] = insertValue(root, nodeQueue, val)
  }
  return root
}

export default buildTreeFromArray
