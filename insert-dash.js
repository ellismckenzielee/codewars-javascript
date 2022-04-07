/* 
Insert Dash kata
https://www.codewars.com/kata/55960bbb182094bc4800007b
*/

function insertDash(num) {
   let numStr = num.toString();
  let output = '';
   numStr.split('').forEach((num, i) => {
     if (num % 2 === 1 && numStr[i+1] % 2 === 1) {
        output += num + '-';
     } else {
       output += num;
     }
   });
  return output;
}
