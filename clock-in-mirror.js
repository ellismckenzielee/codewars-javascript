/* Clock in Mirror kata 
https://www.codewars.com/kata/56548dad6dae7b8756000037
*/

function WhatIsTheTime(timeInMirror) {
  let [hour, minute] = timeInMirror.split(':');
  hour = hour === '12' ?'0' : hour;
  const remainingTime = 12*60 - (hour*60) - minute;
  let newHour = String(Math.floor(remainingTime / 60));
  let newMinute = String(remainingTime - (newHour*60));
  newHour = newHour === '0' ? '12' : newHour;
  return `${'0'.repeat(2-newHour.length) + newHour}:${'0'.repeat(2-newMinute.length) + newMinute}`
 }
