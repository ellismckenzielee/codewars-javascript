/* Bananas kata
https://www.codewars.com/kata/5917fbed9f4056205a00001e
*/

var bananas = function(s, word='banana', current='', length=0) { 
  length = s.length > length ? s.length : length;
  if (s.length ===0 && current.length ===  length ) {
    if (/^.*b.*a.*n.*a.*n.*a.*$/gi.test(current)) return [current]
  }
  const words = [];


  for (let i = 0; i < s.length; i ++) {
    const letter = s[0];
    if (letter === word[0]) {
      const res = bananas(s.slice(i+1), word.slice(1), current + letter, length)
      words.push(...res)
    } const resDash =  bananas(s.slice(i+1), word, current + '-', length)
      words.push(...resDash)
  }
  if (current === '') console.log(words)
  return words;
}
