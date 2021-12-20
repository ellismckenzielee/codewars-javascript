/*Return String of First Characters kata
https://www.codewars.com/kata/5639bdcef2f9b06ce800005b
*/
function makeString(s) {
  return s
    .split(" ")
    .map((word) => word[0])
    .join("");
}
