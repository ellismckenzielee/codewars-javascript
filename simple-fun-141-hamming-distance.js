/* Simple Fun #141: Hamming Distance kata
https://www.codewars.com/kata/58a6af7e8c08b1e9c40001c1
*/
function hammingDistance(a, b) {
  let aBin = a.toString(2);
  let bBin = b.toString(2);
  const maxLen = Math.max(aBin.length, bBin.length);
  aBin = "0".repeat(maxLen - aBin.length) + aBin;
  bBin = "0".repeat(maxLen - bBin.length) + bBin;

  return aBin.split("").reduce((tot, cur, indx) => {
    return tot + (cur === bBin[indx] ? 0 : 1);
  }, 0);
}
