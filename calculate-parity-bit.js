/*
calculate parity bit kata 
https://www.codewars.com/kata/5df261342964c80028345a0a
*/

function checkParity(parity, bin){
  return ['even', 'odd'][bin.match(/1/g).length % 2] === parity ? 0 : 1
}
