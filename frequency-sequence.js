//frequency sequence kata
//https://www.codewars.com/kata/585a033e3a36cdc50a00011c

function freqSeq(str, sep) {
  const counter = str.split("").reduce((counter, char) => {
    if (counter.hasOwnProperty(char)) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
    return counter;
  }, {});
  return str
    .split("")
    .map((char) => counter[char].toString())
    .join(sep);
}
