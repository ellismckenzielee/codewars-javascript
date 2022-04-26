/*
Tribonacci Sequence kata
https://www.codewars.com/kata/556deca17c58da83c00002db
*/

function tribonacci(signature,n){
  if (n <= 3) return signature.slice(0,n);
  const trib = [...signature];
  while (trib.length < n) {
    const lastThree = trib.slice(-3);
    const lastThreeSum = lastThree.reduce((cur, tot) => cur + tot, 0);
    trib.push(lastThreeSum)
  }
  return trib;
}
