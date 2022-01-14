/* Change It Up kata 
https://www.codewars.com/kata/58039f8efca342e4f0000023
*/
function changer(str) {
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/gi.test(char)) {
        const newChar = String.fromCharCode(((char.toLowerCase().charCodeAt() - 97 + 1) % 26) + 97);
        return "aeiou".includes(newChar) ? newChar.toUpperCase() : newChar;
      }
      return char;
    })
    .join("");
}
