/*
Fun With Lists: Reduce kata
https://www.codewars.com/kata/58319f37aeb69a89a00000c7
*/

function reduce(head, f, init) {
  if (head === null) return init;
  const res = f(init, head.data);
  if (head.next) {
    return reduce(head.next, f, res);
  }
return res;
}
