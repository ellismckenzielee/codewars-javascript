/* Filter Unused Digits kata 
https://www.codewars.com/kata/55de6173a8fbe814ee000061
*/

function unusedDigits(...args){
  const digits  = `[^${args.map(String).join('')}]`;
  const remaining = '0123456789'.match(new RegExp(digits, 'gi'));
  return remaining === null ? '' : remaining.join('');
}
