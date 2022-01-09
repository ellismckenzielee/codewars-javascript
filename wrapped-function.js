/* 
Wrapped Function kata
https://www.codewars.com/kata/511ed4593ba69cba1a000002
*/

Function.prototype.wrap = function (func) {
  const orig = this;
  function innerFunc(...rest) {
    return func(orig, ...rest);
  }
  return innerFunc;
};
