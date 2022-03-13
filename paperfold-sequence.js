/* The Paperfold Sequence kata
https://www.codewars.com/kata/5d26721d48430e0016914faa
*/

function* paperFold() {
  let sequence = [1,1,0];
  let i = -1;
  let count = 1;
  while (true){
    i++;
    if (i >= sequence.length) {
      let newSequence = [];
      sequence.forEach(num => {
        newSequence.push(count);
        count = 1 - count;
        newSequence.push(num);
      });
      newSequence.push(0);
      count = 1;
      sequence = newSequence.slice();
  }
      yield sequence[i];
  }
  
}
