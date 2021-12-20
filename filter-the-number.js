/* Filter the number kata
https://www.codewars.com/kata/55b051fac50a3292a9000025
*/
var FilterString = function (value) {
  const nums = value.match(/\d+/g);
  return nums !== null ? parseInt(nums.join("")) : 0;
};
