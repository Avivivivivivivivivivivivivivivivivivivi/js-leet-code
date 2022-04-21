var mySqrt = function (x) {
  let low = 1;
  let high = x;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const sqrt = mid * mid;
    
    if (sqrt == x) return mid;
    if (sqrt < x) low = mid + 1;
    if (sqrt > x) high = mid - 1;
  }
  return high
};


console.log(mySqrt(8))