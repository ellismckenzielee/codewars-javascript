/ * John and Ann Sign Up for Codewars kata
https://www.codewars.com/kata/57591ef494aba64d14000526
*/

function john(n, d=0) {
  return buildList(n, 'john');
}

function ann(n, d=0) {
  return buildList(n, 'ann');
}

function buildList(n, name) {
  const annList = [1];
  const johnList = [0];
  while ((name === 'ann' ? annList.length : johnList.length) < n) {
    const annDay = annList.length;
    const johnDay = johnList.length;
    const annT = annList.slice(-1)[0];
    const johnT = johnList.slice(-1)[0];
    
    if (annT < johnList.length) annList.push(annDay - johnList[annT]);
    if (johnT < annList.length) johnList.push(johnDay - annList[johnT]);
  }
  return name === 'ann' ? annList : johnList;
}

function sumJohn(n) {
    return john(n).reduce((tot, cur) => tot + cur, 0);
}

function sumAnn(n) {
    return ann(n).reduce((tot, cur) => tot + cur, 0);
}
