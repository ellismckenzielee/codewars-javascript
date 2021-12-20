/*My Languages kata
https://www.codewars.com/kata/5b16490986b6d336c900007d
*/
function myLanguages(results) {
  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .reduce((arr, data) => {
      if (data[1] >= 60) arr.push(data[0]);
      return arr;
    }, []);
}
