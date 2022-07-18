/*
Compare Versions kata
https://www.codewars.com/kata/53b138b3b987275b46000115
*/

function compareVersions (version1, version2) {
  const oneSplit = version1.split('.');
  const twoSplit = version2.split('.');
  for(let i = 0; i < Math.max(oneSplit.length, twoSplit.length); i++) {
    const num1 = oneSplit[i] ? parseInt(oneSplit[i]) : 0;
    const num2 = twoSplit[i] ? parseInt(twoSplit[i]) :  0;
    if (num1 !== num2) {
      return num1 > num2;
    }
  }
  return true;
}
