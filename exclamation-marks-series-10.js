/* Exclamation Marks Series #10 kata 
https://www.codewars.com/kata/57fb04649610ce369a0006b8
*/
function remove(s) {
  s = s.replace(/(?<exlam1>!*)(\w+)(?<exclam2>!*)/gi, (match, p1, p2, p3) => {
    const min_exclams = Math.min(p1.length, p3.length);
    return "!".repeat(min_exclams) + p2 + "!".repeat(min_exclams);
  });
  return s;
}
