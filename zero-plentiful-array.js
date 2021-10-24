//zero-plentiful array kata
//https://www.codewars.com/kata/59e270da7997cba3d3000041

function zeroPlentiful(arr) {
  const matches = arr.join("").match(/0+/gi);
  if (matches === null) return 0;
  const filteredMatches = matches.filter((match) => /0{4,}/.test(match));
  return filteredMatches.length === matches.length ? filteredMatches.length : 0;
}
