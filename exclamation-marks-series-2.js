/* 
Exclamation Marks Series #2: Remove Exclamation Marks from the End of the String
https://www.codewars.com/kata/57faece99610ced690000165/
*/
function remove(string) {
  return string.match(/^.*[a-z]/)[0];
}
