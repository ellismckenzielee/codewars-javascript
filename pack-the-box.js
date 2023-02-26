/*
Pack the Box kata
https://www.codewars.com/kata/5840df348c7e72243100012a/train/javascript
*/
function pack(box, string) {
  const two_d_box = box.split('\n').map(row => row.split(''));
  const couldntFit = [];
  string.split('').forEach(char => {
    const casing = char === char.toUpperCase() ? 'C' : 'L';
    const indeces = findNextAvailable(two_d_box, casing);
    if (indeces) {
      indeces.forEach(([row, column]) => {
      two_d_box[row][column] = char;
    })
    } else {
      couldntFit.push(char);
    }
  
  })
  return couldntFit.length ? couldntFit.join(', ') : two_d_box.map(row => row.join(' ')).join('\n');
}

function findNextAvailable(box, size) {
  const rowCount = box.length;
  const columnCount = box[0].length;
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      // If uppercase, check that a 2x2 space is available
      if (size === 'C') {
        const tl = box[rowIndex][columnIndex];
        const tr = columnIndex +1 < columnCount && box[rowIndex][columnIndex + 1];
        const bl = rowIndex + 1 < rowCount && box[rowIndex + 1][columnIndex];
        const br =  rowIndex + 1 < rowCount && columnIndex +1 < columnCount && box[rowIndex + 1][columnIndex + 1];
        if ([tl, tr, bl, br].filter(elem => elem === '#').length === 4) return [[rowIndex, columnIndex], [rowIndex, columnIndex+1], [rowIndex + 1, columnIndex], [rowIndex+1, columnIndex+1]];
      }
    else {
      // If lowercase, check a 1x1 space is available
      if (box[rowIndex][columnIndex] === '#') return [[rowIndex, columnIndex]];
    }
    }
  }
  return null;
}

