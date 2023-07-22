/*
Get the addresses of all google sheet cells in the range kata
https://www.codewars.com/kata/62c376ce1019024820580309/train/javascript
*/

function getCellAddresses(range) {
  const cells = [];
  const [startCell, endCell] = range.split(':');
  if (startCell === endCell) return cells;
  
  const startLetterCode = startCell.slice(0,1).charCodeAt();
  const endLetterCode = endCell.slice(0,1).charCodeAt();

  const startNumber = parseInt(startCell.slice(1));
  const endNumber = parseInt(endCell.slice(1));
  
  for (let columnNumber = startNumber; columnNumber <= endNumber; columnNumber++) {
    for (let rowNumber = startLetterCode; rowNumber <= endLetterCode; rowNumber++ ) {
      cells.push(`${String.fromCharCode(rowNumber)}${columnNumber}`);
    }
  }
  return cells;
}
