/*
Happy Numbers kata
https://www.codewars.com/kata/5464cbfb1e0c08e9b3000b3e
*/

function isHappy(n) {
  const prevNums = [];
  while (n != 1) {
    n = n.toString().split('').reduce((tot, cur) => {
      const num = parseInt(cur);
      return tot += (cur*cur)
    }, 0)
    if (!prevNums.includes(n)) prevNums.push(n);
    else return false;
  }
  return true;
}
