//sum of a beach kata
//https://www.codewars.com/kata/5b37a50642b27ebf2e000010

function sumOfABeach(beach) {
  const matches = beach.match(/(water|sand|fish|sun)/gi);
  return matches !== null ? matches.length : 0;
}
