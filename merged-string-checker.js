/*Merged string checker kata
https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa
 */
function isMerge(s, part1, part2) {
  if (s === "") {
    if (part1.length + part2.length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    let [case1, case2] = [false, false];
    if (part1.length > 0 && part1[0] === s[0]) {
      case1 = isMerge(s.slice(1), part1.slice(1), part2);
    }
    if (part2.length > 0 && part2[0] === s[0]) {
      case2 = isMerge(s.slice(1), part1, part2.slice(1));
    }
    return case1 || case2;
  }
}
