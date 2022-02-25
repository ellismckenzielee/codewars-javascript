/* The Range Function kata
https://www.codewars.com/kata/5298961d9ce954d77b0003a6
*/

function range(start=undefined, end=undefined, step=undefined) {
  const output = [];
  const args = [start, end, step].filter(arg => arg != undefined);
  if (args.length === 1) {
    start = 0
    end = args[0];
    step = 1;
  } else if (args.length === 2) {
    start = args[0];
    end = args[1];
    step = 1;
  } 
  if (step === 0 ) return Array(end-start).fill(start)
  for (let i = start; i < end; i+=step) {
    output.push(i);
  }
  return output;
}
