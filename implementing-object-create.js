/*
Implementing Object.Create kata
https://www.codewars.com/kata/5366cfe48d004ce19600104b
*/

Object.create = function(prototype, properties) {
  if (typeof prototype !== "object" && prototype !== null) {
      console.log('err')
      throw new TypeError();

  }
  const output = {};
  Object.setPrototypeOf(output, prototype)
  if (properties !== undefined) {
      Object.defineProperties(output, properties)
  }

  return output
};
