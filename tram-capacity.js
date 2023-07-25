/*
Tram Capacity kata
https://www.codewars.com/kata/5b190aa7803388ec97000054
*/

function tram(stops, descending, onboarding){
  let [passengers, minCapacity] = [0,0];
  descending.slice(0,stops).forEach((stop, stopNumber) => {
    passengers += (onboarding[stopNumber] - descending[stopNumber]);
    minCapacity = Math.max(minCapacity, passengers);
  });
  return minCapacity;
}
