/* Spaghetti Code - #2 Hard kata 
https://www.codewars.com/kata/586dd5f4a44cfc48bb000011
*/
var spaghettiCode = function (plate) {
  const [y, x] = [plate.length, plate[0].length];
  const spaghettiCount = {};
  let [changeOccurred, longestLength, longest] = [true, 0, ""];

  while (changeOccurred === true) {
    changeOccurred = false;
    for (let j = 0; j < y; j++) {
      for (let i = 0; i < x; i++) {
        const content = plate[j][i];
        const directions = [
          [0, -1],
          [-1, 0],
          [0, 1],
          [1, 0],
        ];
        if (content === "S") {
          for (let direction of directions) {
            const [deltaY, deltaX] = [...direction];
            const [newY, newX] = [j + deltaY, i + deltaX];
            if (newY >= 0 && newY < y && newX >= 0 && newX < x) {
              const surrounding = plate[newY][newX];
              if (
                !["S", "_", " "].includes(surrounding) &&
                /[A-Z]/.test(surrounding)
              ) {
                changeOccurred = true;
                plate[j][i] = surrounding;
              }
            }
          }
        }
      }
    }
  }

  for (let j = 0; j < y; j++) {
    for (let i = 0; i < x; i++) {
      const content = plate[j][i];
      if (!/[A-Z]/.test(content)) continue;
      if (!spaghettiCount.hasOwnProperty(content)) {
        spaghettiCount[content] = 0;
      }
      spaghettiCount[content] += 1;
      if (spaghettiCount[content] > longestLength) {
        longestLength = spaghettiCount[content];
        longest = content;
      }
    }
  }
  return longest;
};
