/*
Stanton Measure kata
https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript
*/


const stantonMeasure = (arr) => {
  return arr.filter(equals(arr.filter(equals(1)).length)).length;
}

const equals = (n)=> {
  return (x) => n === x;
}
