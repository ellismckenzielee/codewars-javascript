/*
Simple Fun #52: Pair of Shoes
https://www.codewars.com/kata/58885a7bf06a3d466e0000e3/train/javascript
*/

function pairOfShoes(shoes) {
  const remaininShoes = shoes.reduce((pile, currentShoe) => {
    return findOpposite(currentShoe, pile)
  }, {0:[], 1:[]});
  return remaininShoes[0].length + remaininShoes[1].length === 0;
}

function findOpposite (shoe, pile) {
  const [id, size] = shoe;
  const oppositeFootIndex = pile[1-id].indexOf(size);
  if(oppositeFootIndex !== -1) pile[1-id].splice(oppositeFootIndex, 1);
  else pile[id].push(size);
  return pile;
}
