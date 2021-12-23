/*Easy Balance Checking kata
https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f
*/
function balance(book) {
  const bookArr = book.split("\n").filter((line) => line !== "");
  const bookArrFiltered = bookArr.map((line) => {
    const linesFixed = line.split("").map((char) => {
      if (/[a-zA-Z0-9]|[. ]/g.test(char)) {
        return char;
      }
      return "";
    });
    return linesFixed.join("");
  });
  const total = bookArrFiltered
    .slice(1)
    .reduce((tot, line) => {
      const value = line.match(/[0-9]+.[0-9]+$/g);
      return tot + parseFloat(value);
    }, 0)
    .toFixed(2);
  const average = total / (bookArrFiltered.length - 1);
  let output = "";
  let remaining = parseFloat(bookArrFiltered[0]);
  for (let i = 0; i < bookArrFiltered.length; i++) {
    if (i === 0) {
      output += `Original Balance: ${remaining.toFixed(2)}\r\n`;
    } else {
      const [itemNum, itemName, itemVal] = bookArrFiltered[i].split(" ");
      remaining -= itemVal;
      output += `${itemNum} ${itemName} ${parseFloat(itemVal).toFixed(2)} Balance ${remaining.toFixed(2)}\r\n`;
    }
  }
  output += `Total expense  ${total}\r\nAverage expense  ${average.toFixed(2)}`;
  return output;
}
