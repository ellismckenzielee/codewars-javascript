/*
Simple Fun #170: Sum Groups
https://www.codewars.com/kata/58a2a561f749ed763c00000b
*/

function sumGroups(arr) {
  const updatedArr = [];
  let chain = [];
  let currentType = arr[0] % 2 === 0;
  arr.forEach(elem => {
    const type = elem % 2 === 0;
    if (type === currentType) chain.push(elem);
    else {
      updatedArr.push(chain.reduce((tot, cur) => tot + cur, 0));
      chain = [];
      chain.push(elem);
      currentType = type;
    }
  })
  updatedArr.push(chain.reduce((tot, cur) => tot + cur, 0));
  return updatedArr.length === arr.length ? arr.length : sumGroups(updatedArr)
}
