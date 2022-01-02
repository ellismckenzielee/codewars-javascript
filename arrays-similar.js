/* Arrays Similar kata
https://www.codewars.com/kata/51e704f2d8dbace389000279
*/
function arraysSimilar(arr1, arr2) {
  arr1.sort(), arr2.sort();
  return (
    arr1.length === arr2.length &&
    arr1.reduce((isSimilar, item, indx) => {
      if (item === arr2[indx] && isSimilar) return true;
      return false;
    }, true)
  );
}
