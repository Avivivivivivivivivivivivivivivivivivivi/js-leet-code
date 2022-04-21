 var climbStairs = function(n) {
  let count = 1;
  let prev1 = 1;
  let prev2 = 1;
  while(n>1){
    count = prev1 + prev2;
    prev1 = prev2;
    prev2 = count;
    n--
  }
  return count 
};

console.log(climbStairs(5))