/*Recursive Averages kata
https://www.codewars.com/kata/5563b04ab3fd7e500d000151
*/

Array.prototype.average = function () {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    const current = this[i];
    if (typeof current === "object") {
      total += current.average();
    } else if (typeof current === "string") {
      const match = parseFloat(current.match(/([0-9]+[.]{0,1}[0-9]+)|[0-9]+/g)[0]);
      total += match;
    } else {
      total += current;
    }
  }
  return total / this.length;
};
