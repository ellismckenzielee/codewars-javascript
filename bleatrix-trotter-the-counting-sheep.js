/*Bleatrix Trotter (The Counting Sheep) kata
https://www.codewars.com/kata/59245b3c794d54b06600002a
*/
function trotter(n) {
  if (n === 0) return "INSOMNIA";
  let mult = 1;
  const digits = [];
  while (digits.length < 10) {
    const nextNum = n * mult;
    const nextNumStr = nextNum.toString();
    const nextNumDigits = nextNumStr.split("").map((digit) => parseInt(digit));

    for (let digit of nextNumDigits) {
      if (!digits.includes(digit)) {
        digits.push(digit);
      }
    }
    mult++;
  }

  return (mult - 1) * n;
}
