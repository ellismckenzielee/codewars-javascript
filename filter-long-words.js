/* 
Filter Long Words kata
https://www.codewars.com/kata/5697fb83f41965761f000052
*/

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(word => word.length > n);
}
