/* 
Sequence Classifier kata
https://www.codewars.com/kata/5921c0bc6b8f072e840000c0/
*/

function sequenceClassifier(arr){
  if (checkConstant(arr)) return 5;
  else if (checkStrictlyIncreasing(arr)) return 1;
  else if (checkNotDecreasing(arr)) return 2;
  const reversedArr = arr.slice().reverse();
  if (checkStrictlyIncreasing(reversedArr)) return 3;
  else if (checkNotDecreasing(reversedArr)) return 4;
  else {
    return 0;
  }
}

function checkStrictlyIncreasing(arr){
  return arr.slice(1).every((elem, indx) => elem > arr[indx]); 
}

function checkNotDecreasing(arr){
  return arr.slice(1).every((elem, indx) => elem >= arr[indx]); 
}


function checkConstant(arr) {
  return arr.every(elem => elem === arr[0]);
}
