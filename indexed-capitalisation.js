/*
Indexed Capitalisation kata
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
*/

function capitalize(s,arr){
  const capitalised = [];
  arr = [...arr].sort((a,b) => a - b);
  s.split('').forEach((char, indx) => {
    if (arr[0] === indx) {
      arr.shift();
      char = char.toUpperCase();
    }
    capitalised.push(char);
  })
  return capitalised.join('');
};
