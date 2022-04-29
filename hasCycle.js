var hasCycle = function(head) {
  if(!head.next) return false;
  
  let slow = head.next;
  let fast = head.next;

  while(slow.next && fast.next){
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) return true
  }
  return false
};