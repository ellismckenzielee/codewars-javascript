/*Ideal Electron Distribution kata
https://www.codewars.com/kata/59175441e76dc9f9bc00000f
*/
function atomicNumber(num) {
  const shells = [];
  let currentShell = 1;
  while (num > 0) {
    let possibleElectrons = 2 * currentShell ** 2;
    if (num - possibleElectrons >= 0) {
      shells.push(possibleElectrons);
    } else {
      shells.push(num);
    }
    num -= shells.slice(-1)[0];
    currentShell++;
  }
  return shells;
}
