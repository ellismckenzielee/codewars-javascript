/*
zipWith kata
https://www.codewars.com/kata/5825792ada030e9601000782
*/

function zipWith(fn,a0,a1) {
  if ([a0.length, a1.length].includes(0)) return [];
  else return [fn(a0[0], a1[0]), ...zipWith(fn, a0.slice(1), a1.slice(1))]
}
