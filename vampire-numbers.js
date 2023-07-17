/*
Vampire Numbers kata
https://www.codewars.com/users/ellismckenzielee/completed_solutions
*/
function vampireTest(a, b) {
  let mult = (a * b).toString();
  for (let letter of a.toString() + b.toString() ) {
    const pos = mult.indexOf(letter);
    if (pos === -1) return false;
    mult = mult.slice(0, pos) + mult.slice(pos + 1);
  } 
  return true;
}
