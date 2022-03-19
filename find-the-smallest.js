/* Find the Smallest kata
https://www.codewars.com/kata/573992c724fc289553000e95
*/

function smallest(n) {
  const nArr = n.toString().split('');
  let output = [n, 0, 0];
  for (let i = 0; i < nArr.length; i ++) {
    const n = nArr[i];
    const newArr = nArr.slice(0, i).concat(nArr.slice(i+1))
    for(let j = 0; j < newArr.length + 1; j++) {
      let insertedArr = newArr.slice();
      insertedArr.splice(j, 0, n);
      const newNum = parseInt(insertedArr.join(''));
      if (newNum < output[0]) {
        output[0] = newNum;
        output[1] = i;
        output[2] = j;
      }
    }
  }
  return output;
}
