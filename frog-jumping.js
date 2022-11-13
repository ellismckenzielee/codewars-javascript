/*
Frog Jumping kata
https://www.codewars.com/kata/536950ffc8a5ca9982001371
*/

function solution(a) {
  const visited = [];
  let frogPosition = 0;
  while (frogPosition > -1 && frogPosition < a.length) {
    visited.push(frogPosition);
    const jump = a[frogPosition];
    frogPosition += jump;
    if (visited.includes(frogPosition)) {
      return -1;
    }
  }
  return visited.length;
}
