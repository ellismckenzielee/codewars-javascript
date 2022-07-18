/*
Who won the election? kata
https://www.codewars.com/kata/554910d77a3582bbe300009c
*/

function getWinner(listOfBallots) {
  let [currentLargest, voteCount, currentWinner] = [0, {}, '']

  listOfBallots.forEach(vote => {
    Object.keys(voteCount).includes(vote) ? voteCount[vote]++ : voteCount[vote] = 1;

    if (voteCount[vote] > currentLargest) { 
        currentLargest = voteCount[vote];
        currentWinner = vote;
      }
  })
  return voteCount[currentWinner] > Math.floor(listOfBallots.length / 2) ? currentWinner : null;
}
