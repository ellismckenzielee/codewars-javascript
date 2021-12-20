/*Piano Kata, Part 1
https://www.codewars.com/kata/589273272fab865136000108
*/
function blackOrWhiteKey(keyPressCount) {
  const keys = ["w", "b", "w", "w", "b", "w", "b", "w", "w", "b", "w", "b"];
  return keys[((keyPressCount - 1) % 88) % 12] === "w" ? "white" : "black";
}
