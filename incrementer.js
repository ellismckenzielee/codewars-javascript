/* 
Incrementer kata
https://www.codewars.com/kata/590e03aef55cab099a0002e8
*/

function incrementer(nums) {
  return nums.map((num, indx) => (num + 1 + indx) % 10);
}
