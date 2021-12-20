/*Bumps in the road kata 
https://www.codewars.com/kata/57ed30dde7728215300005fa
*/

function bump(x) {
  return x.split("").filter((elem) => elem !== "_").length < 16 ? "Woohoo!" : "Car Dead";
}
