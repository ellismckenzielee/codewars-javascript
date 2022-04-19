/* 
Simple String Characters kata
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058
*/

function solve(s){
 const counts = [0, 0, 0, 0];
  s.split('').forEach(char => {
    if (/[A-Z]/.test(char)) counts[0] += 1;
    else if (/[a-z]/.test(char)) counts[1] += 1;
    else if(/[0-9]/.test(char)) counts[2] += 1;
    else counts[3] += 1;
  });
  return counts;
}
