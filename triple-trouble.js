/*Triple Trouble kata
https://www.codewars.com/kata/55d5434f269c0c3f1b000058
*/
function tripledouble(num1, num2) {
  const [num1Str, num2Str] = [num1.toString(), num2.toString()];
  const regex1 = /([0-9])\1{2}/gi;
  const matches1 = num1Str.match(regex1);
  let matches2 = null;
  if (matches1) {
    for (let match of matches1) {
      const regex2 = new RegExp(`${match[0][0]}{2}`, "gi");
      matches2 = num2Str.match(regex2);
      if (matches2) {
        return 1;
      }
    }
  }
  return 0;
}
