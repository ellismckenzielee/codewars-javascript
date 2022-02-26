/* Kingdoms Ep 1: Jousting kata
https://www.codewars.com/kata/6138ee916cb50f00227648d9
*/

function joust(listField, vKnightLeft, vKnightRight) {
  if (vKnightLeft + vKnightRight === 0) return listField;
  const field = listField[0].length;
  let leftIndex = listField[0].indexOf('>');
  let rightIndex = listField[1].indexOf('<');
  while (rightIndex > leftIndex ) {
    leftIndex += vKnightLeft;
    rightIndex -= vKnightRight;
  }
  const lhs = ' '.repeat(leftIndex-2) + '$->' + ' '.repeat(field-(leftIndex+1));
  const rhs = ' '.repeat(rightIndex) + '<-P' + ' '.repeat(field-(rightIndex+3));
  return [lhs, rhs]
                                                            
  }  
