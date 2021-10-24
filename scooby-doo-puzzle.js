//scooby doo puzzle kata
//https://www.codewars.com/kata/58693bbfd7da144164000d05

function scoobydoo(villian, villians) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  villian.house();
  Disguise();

  villian = villian.slice(-5) + villian.slice(0, -5);
  let num = 11;
  villian = villian.split("").reverse();
  let index;

  for (let i = 0; i < villian.length; i++) {
    if ((i + 1) % 2 === 0) {
      index = alph.indexOf(villian[i]);
      villian.splice(i, 1, alph[(index + 5) % alph.length]);
    }
  }
  let mainVillian = villian;
  return villians.filter((villian) => {
    return villian.replace(" ", "").toLowerCase() === mainVillian.join("");
  })[0];
}
