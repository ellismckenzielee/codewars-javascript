/*
Millipede of Words
https://www.codewars.com/kata/6344701cd748a12b99c0dbc4
*/

function solution(words, millipede = "") {
  if (!words.length) return true;
  const results = [];
  for(let i = 0; i < words.length; i ++){
    const word = words[i];
    const slicedWords = words.slice(0, i).concat(words.slice(i+1))
    if (millipede === "") {
      results.push(solution(slicedWords, word))
    }
    if (word.slice(-1) === millipede[0]) {
      results.push(solution(slicedWords, word + millipede))
    }
    else if (word[0] === millipede.slice(-1)) {
      results.push(solution(slicedWords, millipede + word))
    }
    else {
      results.push(false)
    }
  }
  return results.filter(result => result).length > 0;
}
