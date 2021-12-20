/*Checking groups kata 
https://www.codewars.com/kata/54b80308488cb6cd31000161
*/
function groupCheck(s) {
  s = s.split("");
  const currentGroups = [];
  const opening = ["(", "{", "["];
  const pair = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (opening.includes(char)) {
      currentGroups.push(s[i]);
    } else {
      if (pair[currentGroups.slice(-1)[0]] === char) {
        currentGroups.pop();
      } else {
        console.log("here");
        return false;
      }
    }
  }
  if (currentGroups.length > 0) return false;
  return true;
}
