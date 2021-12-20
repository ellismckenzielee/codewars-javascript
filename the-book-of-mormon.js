/*The Book of Mormon kata
https://www.codewars.com/kata/58373ba351e3b615de0001c3
*/
function Mormons(startingNumber, reach, target, day = 0) {
  if (startingNumber >= target) return day;
  else {
    const updatedNumber = startingNumber * (1 + reach);
    return Mormons(updatedNumber, reach, target, day + 1);
  }
}
