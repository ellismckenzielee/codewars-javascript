/*
Find an Area kata
https://www.codewars.com/kata/59b166f0a35510270800018d/train/javascript
*/

function findArea(points) {
  let area = 0;
  for(let i = 1; i < points.length; i++) {
    const averageHeight = (Math.abs(points[i].Y) +  Math.abs(points[i-1].Y))/2;
    const width = points[i].X - points[i-1].X;
    area += width*averageHeight
  }
  return area;
}
