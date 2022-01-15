/* 
Mirror, Mirror kata
https://www.codewars.com/kata/52ffcf5eaff455b3c200074b
*/

function evilTwin(obj) {
  const newObj = Object.create(obj);
  newObj.hasGoatee = true;
  return newObj;
}
