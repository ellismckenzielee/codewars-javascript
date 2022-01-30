/* Object Search and Replace kata 
https://www.codewars.com/kata/5244b0588978473f9500002b
*/
function solution(data, replace) {
  if (typeof data !== "object" || data === null) {
    return data;
  } else {
    const keys = Object.keys(data);
    for (key of keys) {
      if (data[key] === "dynamic") {
        data[key] = replace;
      } else if (typeof data[key] === "object") {
        solution(data[key], replace);
      }
    }
  }
  return data;
}
