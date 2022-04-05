/*
Binary Tree Compare kata
https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/train/javascript/624beef766c149000f4fa80c
*/

function compare(a, b){
  if ([a,b].includes(null)) {
    if (a !== b) return false;
    if (a === b) return true;
  };

  if (a.val !== b.val) return false;
  if ([a.left, b.left].includes(null)) {
    if (a.left !== b.left) return false;

  }
  if ([a.right, b.right].includes(null)) {
    if (a.right !== b.right) return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}
