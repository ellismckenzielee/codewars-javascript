/* Is n divisible by (...)? kata
https://www.codewars.com/kata/558ee8415872565824000007
*/

function isDivisible(...args){
  return args.slice(1).every(elem => args[0] % elem === 0);
}
