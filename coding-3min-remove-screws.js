/*Coding 3min: Remove Screws kata
https://www.codewars.com/kata/5710a50d336aed828100055a
*/

function sc(screws, prevScrew = "x") {
  if (screws.length === 0) return -1;
  const screw = screws[0];
  let time = 2;
  screws = screws.slice(1);
  if (prevScrew !== "x") {
    if (prevScrew !== screw) {
      time += 5;
    }
  }
  return time + sc(screws, screw);
}
