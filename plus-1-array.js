/* +1 Array kata 
https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
*/
function upArray(arr){
  if (!arr.length) return null;
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i-- ) {
    const num = arr[i];
    if (num < 0 || Math.floor(num / 10)) return null;
    const newNum = arr[i] + carry;
    const rem = newNum % 10;
    arr[i] = rem;
    carry = Math.floor(newNum / 10) ? 1 : 0;
  }
  if (carry === 1) arr.unshift(1);
  return arr;
}
