/*
Binaries kata
https://www.codewars.com/kata/5d98b6b38b0f6c001a461198
*/

function code(strng) {
  let binaryStr = ''
    strng.split('').forEach(digit => {
      const binary = parseInt(digit).toString(2);
      const additional = '0'.repeat(binary.length - 1) + '1';
      binaryStr += additional + binary;
    })
 return binaryStr;
}
function decode(str) {
  let numStr = ''
    while(str.length > 0) {
      const length = str.match(/^[0]*1/)[0].length;
      const binNum = str.slice(length, length + length);
      str = str.slice(length + length);
      const num = parseInt(binNum,2).toString(10);
     numStr += num;
    }
  return numStr;
}
