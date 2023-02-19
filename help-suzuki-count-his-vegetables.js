/*
Help Suzuki Count his Vegetables kata
https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/javascript
*/


const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];
function countVegetables(string){
  const vegetableCounts = Object.fromEntries(vegetables.map(vegetable => [vegetable, 0]));
  string.split(' ').forEach(vegetable => {
    if (vegetableCounts[vegetable] !== undefined) vegetableCounts[vegetable]++;
  });
  const countedVeg = Object.entries(vegetableCounts)
  countedVeg.sort(sorter)
  return countedVeg.map(x => [x[1], x[0]]).filter(x => x[0] !== 0)
}

function sorter(vegetable1, vegetable2) {
  const [veg1Count, veg2Count] = [vegetable1[1], vegetable2[1]];
  const [veg1Name, veg2Name] = [vegetable1[0], vegetable2[0]];
  if (veg1Count != veg2Count) return veg2Count - veg1Count;
  else return -veg1Name.localeCompare(veg2Name)
}
