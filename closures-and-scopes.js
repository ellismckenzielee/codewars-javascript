//closures and scopes kata
//https://www.codewars.com/kata/526ec46d6f5e255e150002d1

function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      const indx = i;
      return indx;
    });
  }
  return callbacks;
}
