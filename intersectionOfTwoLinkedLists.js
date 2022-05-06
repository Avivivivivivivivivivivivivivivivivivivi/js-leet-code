var getIntersectionNode = function (headA, headB) {
  let sizeA = 0
  let sizeB = 0
  let tempA = headA
  let tempB = headB
  while (headA) {
    sizeA++
    headA = headA.next
  }
  while (headB) {
    sizeB++
    headB = headB.next
  }
  while (sizeA > sizeB) {
    tempA = tempA.next
    sizeA--
  }
  while (sizeB > sizeA) {
    tempB = tempB.next
    sizeB--
  }
  while (tempA && tempB) {
    if (tempA == tempB) return tempA
    tempA = tempA.next
    tempB = tempB.next
  }
  return null
}
