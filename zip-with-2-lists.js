/*
zipWith II: Lists kata 
https://www.codewars.com/kata/5826231422be6e7344000006
*/

function zipWith(fn,head0,head1) {
  if (head0 === null || head1 === null){
    return;
  }
  const node = new Node();
  node.value = fn(head0.value, head1.value);
  if (!head0.next || !head1.next) {
    node.next = null;
  } else {
    node.next = zipWith(fn, head0.next, head1.next)
  }
  return node;
}
