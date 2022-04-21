var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  for (num of nums2) {
    // console.log(nums1)
    nums1.splice(findFirstMatch(nums1, num), 0, num);
  }
};

let mergeNoSearch = (nums1, m, nums2, n) => {
  let i = m + n - 1;
  m = m - 1;
  n = n - 1;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[i--] = nums1[m--];
    } else {
      nums1[i--] = nums2[n--];
    }
  }
  while (n >= 0) {
    nums1[n] = nums2[n--];
  } 
};

const findFirstMatch = (arr, num, low = 0, high = arr.length) => {
  if (arr.length == 0) return 0;
  if (arr[high - 1] < num) return arr.length;
  if (arr[low] > num) return low;
  while (low <= high) {
    // console.log(low,high)
    mid = low + Math.floor((high - low) / 2);
    if (num == arr[mid] || (num > arr[mid - 1] && num < arr[mid])) return mid;
    if (num < arr[mid]) high = mid - 1;
    if (num > arr[mid]) low = mid + 1;
  }
  return mid;
};
const test = [0];
// console.log(findFirstMatch([ 1, 4, 5, 6 ],2))

// const numbers = [4,5,6,0,0,0];
// merge(numbers, 3, [1, 2, 3], 3);
// const numbers = [1,2,3,0,0,0];
// merge(numbers, 3, [2,5,6], 3);
const numbers = [4, 0, 0, 0, 0, 0];
merge(numbers, 1, [1, 2, 3, 5, 6], 5);

console.log(numbers);
test.splice(0, 1);
console.log(test);
