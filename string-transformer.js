/*String Transformer kata
https://www.codewars.com/kata/5878520d52628a092f0002d0 
*/
function stringTransformer(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map((char) => {
      if (char.toLowerCase().charCodeAt() === char.charCodeAt()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}
