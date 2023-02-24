/*
I am very very very... kata
https://www.codewars.com/kata/58402cdc5225619d0c0000cb/train/javascript
*/

function iam(input='', count=0) {
  const sentence = 'I am';
  function counter(input) {
    return iam(input, count+1)
  }
  if (input) return sentence + ' very'.repeat(count) + ' ' + input;
  else return counter;
}
