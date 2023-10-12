/*
Simple Fun #15: addition without carrying
https://www.codewars.com/kata/588468f3b3d02cf67b0005cd
*/

function additionWithoutCarrying(a,b) {
  const output = [];
  let [aStr, bStr] = [a.toString(), b.toString()];
  const maxLength = Math.max(aStr.length, bStr.length);
  aStr = '0'.repeat(maxLength - aStr.length) + aStr;
  bStr = '0'.repeat(maxLength - bStr.length) + bStr;
  for (let i = maxLength - 1; i >= 0; i--) {
     let sum = 0;
     sum += parseInt(aStr[i]);
     sum += parseInt(bStr[i]);
     output.unshift(sum % 10);
  }
  return parseInt(output.join(''))
}
