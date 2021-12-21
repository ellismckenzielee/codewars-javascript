/*Double Every Other kata
https://www.codewars.com/kata/5809c661f15835266900010a
*/
function doubleEveryOther(a) {
  return a.map((i, ind) => (ind % 2 == 0 ? i : i * 2));
}
