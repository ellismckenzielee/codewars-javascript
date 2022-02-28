/*
SevenAte9 kata
https://www.codewars.com/kata/559f44187fa851efad000087
*/

function sevenAte9(str){
  return str.replace(/(?<=7)9(?=7)/gi, '');
}
