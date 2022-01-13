/*Packing Your Backpack
https://www.codewars.com/kata/5a51717fa7ca4d133f001fdf
*/

function packBagpack(scores, weights, capacity) {
  if ([capacity, scores.length].includes(0)) return 0;
  else {
    const weight = weights[0];
    const score = scores[0];
    if (weight > capacity) {
      return packBagpack(scores.slice(1), weights.slice(1), capacity);
    } else {
      return Math.max(
        packBagpack(scores.slice(1), weights.slice(1), capacity),
        score + packBagpack(scores.slice(1), weights.slice(1), capacity - weight)
      );
    }
  }
}
