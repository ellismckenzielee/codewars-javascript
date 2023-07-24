/*
Page Replacement Algorithms: LRU kata
https://www.codewars.com/kata/6329d94bf18e5d0e56bfca77/train/javascript
*/

function lru(n, referencesList) {
  const mem = Array(n).fill(-1);
  let oldestMemIndexes = Array.from(Array(n).keys());
	referencesList.forEach(page => {
    const memLoc = mem.indexOf(page) == -1 ? oldestMemIndexes[0] : mem.indexOf(page);
      mem[memLoc] = page
      oldestMemIndexes = oldestMemIndexes.filter(idx => idx != memLoc);
      oldestMemIndexes.push(memLoc)
  });
  return mem
};
