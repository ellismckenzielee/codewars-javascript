/* Peel the onion kata 
https://www.codewars.com/kata/60fa9511fb42620019966b35
*/

function peelTheOnion(s, d) {
  const nums = [1];
  for (let i = 1; i <= s; i++) {
    if (s === 1) return nums;
    const current = [];
    let total = i ** d;
    for (let j = i % 2 === 0 ? 1 : 0; j < nums.length; j += 2) {
      const num = nums[j];
      total -= num;
      current.unshift(num);
    }
    if (total !== 0) {
      nums.push(total);
      current.unshift(total);
    }
    if (i === s) {
      return current;
    }
  }
}
