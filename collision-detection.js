/* Collision Detection kata 
https://www.codewars.com/kata/599da159a30addffd00000af/train/javascript
*/

function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) <= radius1 + radius2;
}
