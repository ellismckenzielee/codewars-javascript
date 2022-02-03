/* Missing Number in Un-ordered Arithmetic Progression kata 
https://www.codewars.com/kata/568fca718404ad457c000033
*/
function find(seq) {
  let [min, max] = [1000, -1000];
  for (num of seq) {
    if (num < min ) min = num;
    if (num > max) max = num;
  }
  
  const diff = (max-min)/seq.length;
  let XOR = 0;
  for (let i = 0; i < seq.length; i++) {
      XOR = XOR ^ seq[i];
  }
 
  for (let i = 0; i <= seq.length; i++) {
      XOR = XOR ^ (min + (i * diff));
  }
 
  return XOR;
}
