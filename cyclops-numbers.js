/*
Cyclops Numbers kata
https://www.codewars.com/kata/56b0bc0826814364a800005a
*/

function cyclops(n) {
  n = n.toString(2);
  const centre = Math.floor(n.length / 2);
  return n.length % 2 === 1 && n[centre] == '0' && n.slice(0,centre).concat(n.slice(centre + 1)).indexOf('0') == -1
}
