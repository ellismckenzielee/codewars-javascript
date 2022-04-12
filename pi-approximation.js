/*
PI Approximation kata
https://www.codewars.com/kata/550527b108b86f700000073f/
*/

function iterPi(epsilon) {
  let precisionMet = false;
  let approx = 1;
  let num = 3
  let counter = 0;
	while (!precisionMet) {
    if (counter % 2 === 0) approx -= 1/num;
    else approx += 1/num;
    num += 2;
    counter++;
    if (Math.abs(Math.PI - approx*4) < epsilon) return [counter+1, Math.round(approx*4*10**10)/10**10];
  }
}
