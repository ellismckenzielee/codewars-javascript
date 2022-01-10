/* Ziiiiip! kata
https://www.codewars.com/kata/5298ad7cd0f550269500051b
*/
function zipObject(keys = [], values = []) {
  const obj = {};
  if (keys.length !== 0) {
    keys.forEach((key, indx) => {
      if (Array.isArray(key) && key.length > 1) obj[key[0]] = key[1];
      else {
        obj[key] = indx < values.length ? values[indx] : undefined;
      }
    });
  }

  return obj;
}
