/*
Describe the Shape kata
https://www.codewars.com/kata/59a1ea8b70e25ef8e3002992
*/

function describeTheShape( angles ){
  if (angles <= 2) return 'this will be a line segment or a dot';
  return `This shape has ${angles} sides and each angle measures ${Math.floor((angles-2)*180/angles)}` 
}
