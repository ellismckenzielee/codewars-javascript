/* Digitize kata 
https://www.codewars.com/kata/5417423f9e2e6c2f040002ae
*/

function digitize(n) {
  return n.toString().split('').map(elem => parseInt(elem))
}
