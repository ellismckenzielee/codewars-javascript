/* Assemble String Kata
https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6
*/

function assembleString(array){
  let result = '';
  if (array.length === 0) return result;
  for (let i = 0; i < array[0].length; i ++) {
    let letter = '#';
    for (let j = 0; j < array.length; j++) {
      const char = array[j][i];
      letter = char === '*' ? letter : char;
    }
    result += letter;
  }
  return result;
}
