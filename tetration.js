/* tetration kata
https://www.codewars.com/kata/5797bbb34be9127074000132
*/

function tetration(x,y){
  if (y === 0) return 1;
  return x**tetration(x, y-1);
}
