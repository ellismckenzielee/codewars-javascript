/*Changing Letters kata 
https://www.codewars.com/kata/5831c204a31721e2ae000294
*/
function swap(string) {
  return string
    .split("")
    .map((char) => {
      if ("aeiou".includes(char)) {
        return char.toUpperCase();
      }
      return char;
    })
    .join("");
}
