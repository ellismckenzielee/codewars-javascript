/*
Where is my parent?! kata
https://www.codewars.com/kata/58539230879867a8cd00011c
*/

function findChildren(dancingBrigade) {
  const mothers = dancingBrigade.match(/[A-Z]/g).sort();
  let sortedDancingBrigade = '';
  for(const mother of mothers) {
   const numberOfChildren = dancingBrigade.split('').filter(child => child === mother.toLowerCase()).length;
    sortedDancingBrigade += mother + mother.toLowerCase().repeat(numberOfChildren);
  }

  return sortedDancingBrigade;
}
