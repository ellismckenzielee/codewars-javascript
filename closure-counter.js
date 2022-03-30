/* 
Closure Counter kata
https://www.codewars.com/kata/60edafd71dad1800563cf933/train/javascript
*/

function counter(){
  let count = 0;
  function returnCount () {
    count++
    return count;
  };
  return returnCount;
};
