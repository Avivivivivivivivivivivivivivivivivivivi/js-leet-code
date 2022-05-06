var majorityElementMap = function (nums) {
  const countMap = {}
  nums.forEach((num) => {
    if (countMap[num] != null) countMap[num]++
    else countMap[num] = 0
  })

  // console.log(countMap)
  let max = Math.max()
  let maxKey
  for (const it in countMap) {
    // console.log(it)
    if (countMap[it] > max) {
      maxKey = it
      max = countMap[it]
    }
  }
  return maxKey
}

const majorityElementSort = (arr) => {
  if (arr.length === 1) return arr[0]
  const halfLength = Math.floor(arr.length / 2)
  arr.sort()
  let count = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      if (++count > halfLength) return arr[i]
    } else {
      count = 1
    }
  }
}

const majorityElement = (arr) => {
  let count = 0
  let candidate
  for (item of arr) {
    if (count === 0) {
      candidate = item
    }
    count += item === candidate ? 1 : -1
  }
  return candidate
}
