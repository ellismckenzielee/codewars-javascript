/*
Function Cache kata
https://www.codewars.com/kata/525481903700c1a1ff0000e1
*/

function cache(func) {
  const cache = {};
  return function (...arg) {
    const argString = typeof arg === "object" ?  JSON.stringify(arg) : arg;
    if (Object.keys(cache).includes(`${func.name}${argString}`)) return cache[`${func.name}${argString}`]
    else {
        const result = func(...arg);
        cache[`${func.name}${argString}`] = result
      return result
    }
  }
}
