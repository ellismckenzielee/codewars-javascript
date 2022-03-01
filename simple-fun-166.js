/* Simple Fun #166: Best Match kata
https://www.codewars.com/kata/58b38256e51f1c2af0000081
*/

function bestMatch(ALAHLYGoals, zamalekGoals) {
  const bestMatch = {zamalekGoals: 0, goalDifference: 1000, matchIndex: 0};
  ALAHLYGoals.forEach((alahlyGoal, indx) => {
    const zamalekGoal = zamalekGoals[indx];
    const goalDifference = alahlyGoal - zamalekGoal;
    if (goalDifference < bestMatch.goalDifference || (goalDifference === bestMatch.goalDifference && bestMatch.zamalekGoals < zamalekGoal)) {
      bestMatch.zamalekGoals = zamalekGoal;
      bestMatch.goalDifference = goalDifference;
      bestMatch.matchIndex = indx;
    } 
  })
  
  return bestMatch.matchIndex;
}
