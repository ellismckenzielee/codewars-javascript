/* 
Adding Big Numbers kata
https://www.codewars.com/kata/525f4206b73515bffb000b21/
*/

function add(a, b) {
  const maxLength = a.length > b.length ? a.length : b.length;
  a = ('0'.repeat(maxLength - a.length) + a).split('');
  b = ('0'.repeat(maxLength - b.length) + b).split('');
  let carry = 0;
  const output = [];
  for (let i = maxLength-1; i>=0; i--) {
    const dig1 = parseInt(a[i]);
    const dig2 = parseInt(b[i]);
    const sum = dig1 + dig2 + carry;
    const num = sum % 10;
    carry = Math.floor(sum/10);
    output.unshift(num.toString());
  }
  if (carry !== 0) output.unshift(carry.toString());
  return output.join('');
}
