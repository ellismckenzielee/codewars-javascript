/* Array Helpers kata
https://www.codewars.com/kata/525d50d2037b7acd6e000534/solutions/javascript
*/

function cube() {
  return this.map((elem) => elem ** 3);
}

function square() {
  return this.map((elem) => elem ** 2);
}

function sum() {
  return this.reduce((tot, cur) => tot + cur, 0);
}

function average() {
  const sum = this.sum(this);
  return sum / this.length;
}

function even() {
  return this.filter((elem) => elem % 2 === 0);
}

function odd() {
  return this.filter((elem) => elem % 2 === 1);
}

const funcs = { cube, square, sum, average, even, odd };

Object.assign(Array.prototype, funcs);
