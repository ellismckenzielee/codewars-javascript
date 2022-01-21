/* uniq (UNIX style) kata
https://www.codewars.com/kata/52249faee9abb9cefa0001ee
*/
function uniq(a) {
  const uniqs = [];
  a.forEach((char) => {
    if (uniqs.slice(-1)[0] !== char) {
      uniqs.push(char);
    }
  });
  return uniqs;
}
