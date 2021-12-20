/*Repeated Substring kata
https://www.codewars.com/kata/5491689aff74b9b292000334
*/
function f(s) {
  const stringLength = s.length;
  let subString = "";
  for (let i = 0; i < s.length; i++) {
    const length = i + 1;
    subString += s[i];
    if ([1, stringLength].includes(length)) {
      if (subString.repeat(stringLength) === s) return [subString, stringLength];
      else if (length === stringLength) return [subString, 1];
    } else {
      const repeats = stringLength / length;
      if (subString.repeat(repeats) === s) return [subString, repeats];
    }
  }
}
