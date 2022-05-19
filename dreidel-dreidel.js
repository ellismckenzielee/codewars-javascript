/*
Dreidel Dreidel kata
https://www.codewars.com/kata/52b013920b1d45c8b4000355
*/

function gamble(rolls, myCoins, pot) {
  rolls.forEach(roll => {
     if (roll === 'Gimel') {
      myCoins += pot;
      pot = 0;
    } 
    else if (roll === 'Hei') {
      myCoins += Math.floor(pot/2);
      pot -= Math.floor(pot/2);
    }
    else if (roll === 'Shin') {
      pot++;
      myCoins--;
    }
  })
  return myCoins;
}
