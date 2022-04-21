const arr = Array.from(Array(100000000).keys()); 
const predToFind = it => it >= 100
console.time('find')

const res = arr.find(predToFind)
console.log(res)
console.timeEnd('find')



const findFirstMatch = (arr, pred, firstKey = 0, lastKey = arr.length - 1) => {
  // console.log(firstKey , lastKey)
  if (pred(arr[firstKey])) return arr[firstKey];
  if (!pred(arr[lastKey])) return;
  const res = findFirstMatch(arr, pred, firstKey, Math.floor((lastKey + firstKey) / 2));
  if (res) return res;
  return findFirstMatch(arr, pred, Math.floor((lastKey + firstKey) / 2) + 1, lastKey);
};

console.time('divide')

console.log(findFirstMatch(arr, predToFind));

console.timeEnd('divide')
