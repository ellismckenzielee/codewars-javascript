/* Derivatives of type x^n kata
https://www.codewars.com/kata/55e2de13b668981d3300003d
*/

function differentiate(f) {
  if (!f.includes('x')) return '0';
  let [coeff, exp] = [f.match(/^[-0-9]+/gi), f.match(/[-0-9]+$/gi)]
  if (coeff !== null) coeff = coeff[0];
  if (exp !== null) exp = exp[0];
  
  if (coeff === null) coeff = 1;
  if (coeff === '-') coeff = -1;
  if (exp === null) exp = 1;
  
  coeff = coeff*exp;
  exp = exp-1;
  
  let output = '';
  if (exp === 1) output = 'x'
  else if (exp !== 0) output = `x^${exp}`;
  if (output === '') {
    return coeff.toString();
  } else {
    if (coeff === -1) coeff = '-';
    if (coeff === 1) coeff = '';
    return coeff + output;
  }
}
