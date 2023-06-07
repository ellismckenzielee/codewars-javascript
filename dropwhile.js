/*
The dropWhile function kata
https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript
*/

function dropWhile(arr, pred) {
    let indx = 0;
    while(indx < arr.length) {
      if (!pred(arr[indx])) {
        return arr.slice(indx)
      }
      indx++;
    }
    return [];
}
