/*
Frank's Sticky Calculator kata
https://www.codewars.com/kata/5900750cb7c6172207000054
*/

function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1);
    val2 = Math.round(val2);
    const stickyVal = parseInt(`${val1}${val2}`);
    let total = stickyVal;
    if (operation === '+') {
      total += val2;
    } else if (operation === '-') {
      total -= val2;
    } else if (operation === '/') {
      total /= val2;
    } else {
      total *= val2;
    }
  return Math.round(total);
}
