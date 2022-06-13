/*
Exclamation Marks Series 5: Remove Exclamation Marks from the End of Words kata
https://www.codewars.com/kata/57faf32df815ebd49e000117/train/javascript
*/
function remove (string) {
   const string2 = string.replace(/([a-zA-Z]+)(!+)/g, (fullmatch, word, exclamations) => {
    return word
  })
   return string2;
}
