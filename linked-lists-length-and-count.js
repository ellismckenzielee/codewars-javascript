/* 
Linked Lists - Length and Count kata
https://www.codewars.com/kata/55beec7dd347078289000021
*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head, total=0) {
  if (head === null) return total;
  return length(head.next, total+1)
}



function count(head, data, total=0) {
  if (head === null) return total;
  return head.data === data ? count(head.next, data, total+1) : count(head.next, data, total);
}
