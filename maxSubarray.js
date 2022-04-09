var maxSubArray = function (nums) {
  let max = nums[0];
  let curMax = nums[0];
  for (i = 1; i < nums.length; i++) {
    curMax = curMax + nums[i] > nums[i] ? curMax + nums[i] : nums[i];
    max = curMax > max ? curMax : max;
  }
  return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]))