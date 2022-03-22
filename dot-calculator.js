/* 
Dot Calculator kata 
https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/
*/

function dotCalculator (equation) {
  let [firstNum, operator, secondNum] = equation.split(' ')
  firstNum = firstNum.length;
  secondNum = secondNum.length;
  let total;
  if (operator === '+') total = firstNum + secondNum;
  else if (operator === '-') total = firstNum - secondNum;
  else if (operator === '*') total = firstNum * secondNum;
  else if (operator === '//') total = Math.floor(firstNum / secondNum);
  return '.'.repeat(total)
}
