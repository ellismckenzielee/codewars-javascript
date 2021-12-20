/*Exclamation Marks Series #17 
https://www.codewars.com/kata/57fb44a12b53146fe1000136/solutions/javascript
*/

function balance(left, right) {
  const sum = (input) => {
    return input === "?" ? 3 : 2;
  };
  const ltotal = left.split("").reduce((tot, char) => {
    return sum(char) + tot;
  }, 0);
  const rtotal = right.split("").reduce((tot, char) => {
    return sum(char) + tot;
  }, 0);

  if (ltotal === rtotal) return "Balance";
  return ltotal > rtotal ? "Left" : "Right";
}
