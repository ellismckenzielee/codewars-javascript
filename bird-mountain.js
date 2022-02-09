/*Bird Mountain kata
https://www.codewars.com/kata/5c09ccc9b48e912946000157/
*/

var peakHeight = function(mountain) {
  numericalMountain = mountain.map(row => {
    row = row.map(peak => {
      return peak === '^' ? 1 : 0;
    })
    return row;
  });
  
  let [changeOccurred, max] = [true, 0];
  while (changeOccurred) {
    changeOccurred = false;
    for (let i = 0; i < numericalMountain.length; i++) {
      for (let j = 0; j< numericalMountain[i].length; j++) {
        const oldVal = numericalMountain[i][j];
        max = max < oldVal ? oldVal : max;
        if (oldVal === 0) {
          continue;
        }
        else {
          const newVal = findSurroundings(numericalMountain, i, j) + 1;
          if (newVal !== oldVal) {
            numericalMountain[i][j] = newVal;
            changeOccurred = true;
          }
        } 
      }
    }
  }
  return max;
  
}

const findSurroundings = (numericalMountain, i, j) => {
    const surrounding = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    let min = 1000;
    for (const disp of surrounding) {
      const x = j + disp[1];
      const y = i + disp[0];
      if (x < 0 || x >= numericalMountain[0].length || y< 0 || y >= numericalMountain.length) return 0;
      const peak = numericalMountain[y][x];
      min = min < peak ? min : peak;
    }
  return min;
