/* Compress Sentences kata
https://www.codewars.com/kata/59de469cfc3c492da80000c5
*/

function compress(sentence) {
  const sentenceSplit = sentence.split(' ');
  const words = {};
  let output = '';
  sentenceSplit.forEach((word, indx) => {
    word = word.toLowerCase();
    if (!words.hasOwnProperty(word)) words[word] = Object.keys(words).length;
    output += words[word].toString();
  })
  return output;
}
