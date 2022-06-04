/*
Bingo (Or not) kata
https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145
*/

function bingo(a) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let bingo = 'BINGO';
  a.forEach((num) => {
    const letter = alphabet[num - 1];
    const indx = bingo.indexOf(letter);
    if (indx !== -1) {
      bingo = bingo.slice(0, indx) + bingo.slice(indx + 1);
    }
  })
  return bingo.length > 0 ? 'LOSE' : 'WIN'
}
