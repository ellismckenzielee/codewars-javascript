/*Srot the inner ctonnet in dsnnieedcg oredr kata
https://www.codewars.com/kata/5898b4b71d298e51b600014b
*/

function sortTheInnerContent(words)
{
  return words.split(' ').reduce((outputStr, currentWord) => {
    if (currentWord.length <=2 ) return outputStr + ' ' + currentWord;
    const wordArr = currentWord.split('');
    return outputStr + ' ' + wordArr[0] +  wordArr.slice(1,-1).sort().reverse().join('') + wordArr.slice(-1)[0];
  }, '').trim();
}
