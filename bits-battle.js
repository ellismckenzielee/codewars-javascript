//bits battle kata
//https://www.codewars.com/kata/58856a06760b85c4e6000055

function bitsBattle(numbers) {
  const odds = numbers.filter((num) => num % 2 === 1);
  const evens = numbers.filter((num) => num % 2 === 0 && num !== 0);
  const oddsBinary = odds
    .map((num) => num.toString(2))
    .join("")
    .split("");
  const evensBinary = evens
    .map((num) => num.toString(2))
    .join("")
    .split("");
  const oddsFighters = oddsBinary.filter((char) => char === "1").length;
  const evensFighters = evensBinary.filter((char) => char === "0").length;
  if (oddsFighters === evensFighters) {
    return "tie";
  } else {
    return oddsFighters > evensFighters ? "odds win" : "evens win";
  }
}
