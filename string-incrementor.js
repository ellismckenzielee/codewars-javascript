/*
String Incrementor Kata
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
*/

function incrementString (strng) {
  const endNum = strng.match(/[0-9]+$/g);
  if (!endNum) return strng +'1'
  let newEndStr = (parseInt(endNum[0]) + 1).toString();
  if (newEndStr.length < endNum[0].length) 
    newEndStr = '0'.repeat( endNum[0].length - newEndStr.length ) + newEndStr;  
  return strng.replace(/[0-9]+$/g, newEndStr);
}
