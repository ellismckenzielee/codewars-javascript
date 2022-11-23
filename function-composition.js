/*
Function Composition kata
https://www.codewars.com/kata/5655c60db4c2ce0c2e000026
*/

function compose(...fns) {
  return function (val) {
    fns.reverse().forEach(fn => {
      val = fn(val)
    })
    return val;
  }
}
