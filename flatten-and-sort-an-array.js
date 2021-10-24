//flatten and sort an array kata
//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

"use strict";

function flattenAndSort(array) {
  let flatArray = array.reduce((arr, elem) => {
    return arr.concat(...elem);
  }, []);
  return flatArray.sort((a, b) => a - b);
}
