import { TreeNode } from './createTree.mjs'

var sortedArrayToBST = function (nums, length = nums.length) {
  if (!length) return null
  if (length === 1) return new TreeNode(nums[0])

  const center = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[center])

  root.left = sortedArrayToBST(nums.slice(0, center))
  root.right = sortedArrayToBST(nums.slice(center + 1, length))

  return root
}
