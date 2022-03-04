/* Regex Validate PIN code kata 
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
*/

function validatePIN (pin) {
  return /^(([0-9]{4})|([0-9]{6}))$/.test(pin);
}
