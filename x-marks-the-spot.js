/*
x marks the spot kata
https://www.codewars.com/kata/5777fe3f355edbf0a5000d11
*/

const xMarksTheSpot = (input) => {
  let output = [];
  for (let row = 0; row < input.length; row++) {
    for (let column =0; column < input[row].length; column++) {
      const elem = input[row][column];
      if (elem === 'x') {
        if (output.length > 0) return [];
        else output = [row, column]
      }
    }
  }
  return output;
}
