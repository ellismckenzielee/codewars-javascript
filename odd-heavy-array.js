/* 
Odd Heavy Array kata
https://www.codewars.com/kata/59c7e477dcc40500f50005c7
*/

function isOddHeavy(n){
  let [isAnOdd, oddMin, evenMax] = [false, Infinity, -Infinity]
  n.forEach(num => {
    if (num % 2 === 0) {
      if (num > evenMax) evenMax = num;
    } else {
      isAnOdd = true;
      if (num < oddMin) oddMin = num;
    }
  })
  return oddMin > evenMax && isAnOdd;
}
