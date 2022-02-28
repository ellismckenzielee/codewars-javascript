/* ONE ONe One one kata 
https://www.codewars.com/kata/588ac50727eb94c87700001f
*/

function consecutiveOnes(nums) {
  let maximum = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++
      if (current > maximum) maximum = current; 
    }
    else { current = 0};
  }
  return maximum;
};
