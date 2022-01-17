/*Catalog Kata
https://www.codewars.com/kata/59d9d8cb27ee005972000045
*/

function catalog(s, article) {
  const lines = s.split("\n");
  const regex = new RegExp(
    `<name>(?<name>.*${article}.*)</name><prx>(?<prx>[0-9.]+)</prx><qty>(?<qty>[0-9]+)</qty>`,
    "i"
  );
  let output = "";
  for (const line of lines) {
    const match = line.match(regex);
    if (match !== null) {
      output += `${match.groups.name} > prx: $${match.groups.prx} qty: ${match.groups.qty}\r\n`;
    }
  }
  return output.trim() || "Nothing";
}
