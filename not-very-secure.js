/*Not very secure kata
https://www.codewars.com/kata/526dbd6c8c0eb53254000110
*/
function alphanumeric(string) {
  return /^[0-9a-zA-Z]+$/.test(string);
}
