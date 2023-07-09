/*
Join Two Arrays by Id
https://www.codewars.com/kata/6481c68ffdf80b6147d85248
*/

function joinArraysById(arr1, arr2) {
  const ids1 = getIdIndexes(arr1);
  const ids2 = getIdIndexes(arr2);
  const uniqueIds = new Set([...Object.keys(ids1), ...Object.keys(ids2)]);
  const output = [];
  for (let id of uniqueIds) {
    const obj1 = ids1[id] !== undefined ? arr1[ids1[id]] : {};
    const obj2 = ids2[id] !== undefined ? arr2[ids2[id]] : {};
    output.push({...obj1, ...obj2})
  }
  return output
}

function getIdIndexes (arr) {
  const ids = {};
  for (let i = 0; i < arr.length; i++) {
    ids[arr[i].id] = i;
  }
  return ids;
}
