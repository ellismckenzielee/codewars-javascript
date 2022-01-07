/* JavaScript Filter - 3 kata
https://www.codewars.com/kata/525f0459fb9570f9ff00005d
*/

function searchNames(logins) {
  return logins.filter((item, indx, arr) => {
    const isEmail = /^\w+@\w+[.]com/.test(item);
    if (isEmail) {
      return [arr[indx - 1].slice(0, 1), arr[indx - 1].slice(-1)].includes(".");
    }
  });
}
