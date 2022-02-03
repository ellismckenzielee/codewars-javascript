/* Coding Meetup #15 - Find the Odd Names kata
https://www.codewars.com/kata/583a8bde28019d615a000035/
*/

function findOddNames(list) {
  return list.filter(person => {
    let ASCIItotal = 0;
    for (let i = 0; i < person.firstName.length; i++) {
      ASCIItotal += person.firstName[i].charCodeAt();
    }
    return ASCIItotal % 2 === 1;
  })
}
