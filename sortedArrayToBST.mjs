import { TreeNode } from './createTree.mjs'

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  if (nums.length === 1) return new TreeNode(nums[0])

  const center = Math.floor(nums / 2)

  const root = new TreeNode(nums[center])
  root.left = sortedArrayToBST(nums.slice(0, center))
  root.right = sortedArrayToBST(nums.slice(center + 1, nums.length))
  return root
}
