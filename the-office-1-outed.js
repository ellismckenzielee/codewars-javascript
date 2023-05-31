/*
The Office 1 - Outed
https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
*/

function outed(meet, boss){
  const scores = Object.entries(meet).map(score => score[0] === boss ? score[1] * 2 : score[1])
  const total = scores.reduce((tot, cur) => tot + cur, 0);
  return (total / scores.length) > 5 ? "Nice Work Champ!" : "Get Out Now!";
}
