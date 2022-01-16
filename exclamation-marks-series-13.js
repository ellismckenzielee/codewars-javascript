/* Exclamation Marks Series #13: Count the Number of Exclamation Marks and Question Marks. Return the Product kata
https://www.codewars.com/kata/57fb142297e0860073000064
*/

function product(string) {
  const questionMarks = string.match(/[?]/g);
  const exclamationMarks = string.match(/[!]/g);
  return (questionMarks ? questionMarks.length : 0) * (exclamationMarks ? exclamationMarks.length : 0);
}
