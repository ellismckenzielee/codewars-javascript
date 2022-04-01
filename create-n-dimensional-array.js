/* 
Create N-dimensional Array kata
https://www.codewars.com/kata/6161847f52747c0025d0349a
*/

const createNDimensionalArray = (n, size, level = 1 ) => {
  const levelStr = `level ${level}`;
  const hasChildren = level !== n;
  let arr = [];
  for (let i = 0; i < size; i ++) {
    if (hasChildren) {
      arr.push(createNDimensionalArray(n, size, level+1));
    } else {
      arr.push(levelStr);
    }
  }
  return arr;
}
