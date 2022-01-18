/* Flatten a Nested Map kata 
https://www.codewars.com/kata/52859abdf8fc1b12e0000141
*/

function flattenMap(map) {
  if (map === null) return null;
  const keys = Object.keys(map);
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = map[keys[i]];
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      const subObj = flattenMap(value);
      for (let subKey in subObj) {
        newObj[key + "/" + subKey] = subObj[subKey];
      }
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}
