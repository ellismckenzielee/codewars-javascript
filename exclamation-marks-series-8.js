/* Exclamation Marks Series #8 kata
https://www.codewars.com/kata/57fafd0ed80daac48800019f
*/
function remove(s) {
  const matches = s.match(/!/g);
  if (!matches) return s;
  return s.replace(/!/g, "") + "!".repeat(matches.length);
}
