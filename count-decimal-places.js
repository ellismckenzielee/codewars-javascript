/* Count decimal places kata
https://www.codewars.com/kata/529cd9c409a361b676000021
*/

function decimalPlaces(n) {
  if (typeof n != 'number') return 0;
  const strN = n.toString();
  const num = strN.match(/^-?[0-9]+([.][0-9]+)?/);
  const exp = strN.match(/e-?[0-9]+$/);
  let decimal = 0;
  if (num) {
     if (num[0].includes('.')) {
        decimal = num[0].split('.')[1].length;
     } 
  }
 
  if (exp) {
    decimal -= parseInt(exp[0].slice(1));
  }
  return decimal;
}
