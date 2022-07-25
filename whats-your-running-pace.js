/*
What's your running pace? kata
https://www.codewars.com/kata/578b8c0e84ac69a4d20004c8
*/

function runningPace(distance, time){
  const [mins, seconds] = time.split(':').map(x => parseInt(x, 10));
  const totalTime = (60*mins) + seconds;
  if(totalTime === 0) return Infinity;
  const pace = totalTime / distance;
  const paceMins = Math.floor(pace / 60)
  let paceSeconds = Math.floor(pace - Math.floor(pace/60)*60)
  if (paceSeconds < 10) paceSeconds = '0' + paceSeconds.toString() ;
  return paceMins + ':' + paceSeconds
}
