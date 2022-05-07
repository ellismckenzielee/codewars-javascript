/*
Separating Strings kata
https://www.codewars.com/kata/5977ef1f945d45158d00011f
*/                                                                                                         

function sepStr(str) {
  const wordsArray = str.split(' ');
  const longestWord = wordsArray.reduce((longestLength, currentWord) => {
    if (currentWord.length > longestLength) return currentWord.length;
    return longestLength;
  }, 0);
  const numberOfWords = wordsArray.length;
  let outputArr = '-'.repeat(longestWord).split('');
  outputArr = outputArr.map(elem => []);
  for (let letterIndex = 0; letterIndex < longestWord; letterIndex++){
    for (let wordIndex = 0; wordIndex < numberOfWords; wordIndex++) {
      const letter = wordsArray[wordIndex][letterIndex]
      outputArr[letterIndex][wordIndex] = letter === undefined ? '' : letter
    }
  }
  return outputArr
}
