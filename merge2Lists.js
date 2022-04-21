var mergeTwoLists = function(list1, list2) {
  let res =[];
  if(!list1 || !list1.length) return list2;
  if(!list2 || !list2.length) return list1;
  while(list1.length && list2.length){
    res.push(list1[0] < list2[0] ? list1.shift(): list2.shift())
  }
  res = [...res, ...list1]
  res = [...res, ...list2]
  return res
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))