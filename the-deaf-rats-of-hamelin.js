/*
The Deaf Rats of Hamelin kata
https://www.codewars.com/kata/598106cb34e205e074000031
*/

var countDeafRats = function(town) {
  town = town.replace(/(~O)|(O~)/g, (arg) => ' ' + arg + ' ')
  const matches = town.match(/(O~)(?=.*P)|(?<=P.*)(~O)/g);
  return matches === null ? 0 : matches.length;
}
