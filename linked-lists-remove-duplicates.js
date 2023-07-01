/*
Linked Lists - Remove Duplicates kata
https://www.codewars.com/kata/55d9f257d60c5fd98d00001b
*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head) return null;
  let currentNode = head.next;
  let tip = head;
  while (currentNode) {
    if (currentNode.data != tip.data) {
      tip.next = currentNode;
      tip = currentNode;
    }
    currentNode = currentNode.next;
  }
  tip.next = null;
  return head;  
}
6 minutes a
