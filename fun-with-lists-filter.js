/*
Fun with Lists: Filter kata
https://www.codewars.com/kata/582041237df353e01d000084
*/

function filter(head, p) {
  if (head === null) return null;
  head = findNext(head, p);
  firstHead = head;
  while (head !== null) {
    const next = findNext(head.next, p)
    head.next = next
    if (next===null) break;
    head = next
    
  }
 return firstHead;

}

function findNext(head, p) {
  console.log('in find next function', head)
  if (head === null) return null;
  if (head.next === null && p(head.data) || p(head.data)){
    return head;
  }
  else {
    return findNext(head.next, p);
  }
}
