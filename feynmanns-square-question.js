/* 
Feynmann's Square Question kata
https://www.codewars.com/kata/551186edce486caa61000f5c
*/


function countSquares(n){
  if (n === 1) return 1;
  else {
    return n*n + countSquares(n-1);
  }
}

function countSquares(n){
  let tot = 0;
  let sqSize = n-1;
  while (sqSize >= 1) {
    const numOfSquares = ((n - sqSize) + 1) ** 2;
    tot += numOfSquares;
    sqSize--;
  }
  return 1 + tot;
}
