/*
Simple Fun #217: Sort By Guide kata

*/

function sortByGuide(arr, guide) {
  const output = '-'.repeat(arr.length).split('');
  const toOrder = [];
  arr.forEach((elem, indx) => {
    if (guide[indx] === -1) output[indx] = elem;
    else toOrder.push([elem, guide[indx]]);
  })
  const ordered = toOrder.sort((a,b) => a[1] - b[1])
  return output.map(elem => {
    if (elem === '-') {
      const removed = ordered.shift();
      return removed[0];
    };
    return elem;
  })
}
