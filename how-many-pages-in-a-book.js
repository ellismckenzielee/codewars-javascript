/* 
How Many Pages in a Book? kata
https://www.codewars.com/kata/622de76d28bf330057cd6af8
*/

function amountOfPages(summary){
  let digits = '';
  let page = 0;
  while (digits.length < summary) {
    page++;
    digits += page;
  }
  return page;
}
