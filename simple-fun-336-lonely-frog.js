/*Simple Fun #336: Lonely Frog kata
https://www.codewars.com/kata/5954b48ad8e0053403000040
*/
function jumpTo(n) {
  if (n === 0) return 0;
  n = Math.abs(n);
  let step = 1;
  let solved = false;
  let coord = 0;
  while (solved === false) {
    coord += step;
    step++;
    if (coord >= n) {
      if (coord === n) {
        return step - 1;
      } else {
        const diff = coord - n;
        const diffHalved = diff / 2;
        if (Math.floor(diffHalved) === diffHalved && diffHalved < coord) {
          return step - 1;
        }
      }
    }
  }
}
