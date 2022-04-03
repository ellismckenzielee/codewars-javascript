/* 
Alphabetical Grid kata
https://www.codewars.com/kata/60a94f1443f8730025d1744b
*/

function grid(N) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let output = '';
  for (let row = 0; row < N; row++) {
    let line = '';
    for (let letterIndx = 0; letterIndx < N; letterIndx++) {
      line += alphabet[letterIndx % 26]; 
    };
    line = line.split('').join(' ') + '\n';
    output += line;
    alphabet.push(alphabet.shift());
  };
  return N >= 0 ? output.trim() : null;
};
