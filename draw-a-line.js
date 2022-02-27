/* 
Draw a Line kata
https://www.codewars.com/kata/54fdc227762e2ec4c50004e8
*/

function drawLine(start, end) {
  const N = Math.max(Math.abs(end.x-start.x), Math.abs(end.y-start.y));
  const grad = {x: (end.x - start.x), y: (end.y - start.y)};
  const output = [];
  if (N === 0 ) return [start];
  for (let i = 0; i <= Math.abs(N); i ++) {
    output.push({x: Math.floor(start.x + i*grad.x/N), y:Math.floor( start.y + i*grad.y/N)})
  }
  return output
}
