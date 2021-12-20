/*Piano Kata, Part 2
https://www.codewars.com/kata/589631d24a7323d18d00016f
*/
function whichNote(keyPressCount) {
  const keys = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const pianoTraversals = Math.floor((keyPressCount - 1) / 88);
  const remaining = keyPressCount - pianoTraversals * 88;
  return keys[(remaining - 1) % keys.length];
}
