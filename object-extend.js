/* Object Extend kata 
https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb
*/
var extend = function(...args) {
  const newObj = {};
  const objects = args.filter(arg => typeof arg === 'object' && !Array.isArray(arg));
  objects.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      if (!newObj.hasOwnProperty(key)) newObj[key] = obj[key]
    })
  })
  return newObj;
}
