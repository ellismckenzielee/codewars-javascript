//count words kata
//https://www.codewars.com/kata/56b3b27cadd4ad275500000c

function wordCount(s) {
  let matches = s.match(/[a-zA-Z]+/gi);
  let filterWords = ["a", "the", "on", "at", "of", "upon", "in", "as"];
  return matches.filter(
    (match) => filterWords.indexOf(match.toLowerCase()) === -1
  ).length;
}
