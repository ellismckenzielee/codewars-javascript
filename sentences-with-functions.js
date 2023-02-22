/*
Sentences with Functions kata
https://www.codewars.com/kata/52567c56cb6ac86b56000516
*/

function Adam(arg='') {return combine('Adam', arg)}
function has(arg='')  {return combine('has', arg)}
function a(arg='')  {return combine('a', arg)}
function dog(arg='')  {return combine('dog', arg)}
function The(arg='')  {return combine('The', arg)}
function name(arg='')  {return combine('name', arg)}
function of(arg='')  {return combine('of', arg)}
function the(arg='')  {return combine('the', arg)}
function is(arg='')  {return combine('is', arg)}
function also(arg='')  {return combine('also', arg)}

function combine(word, arg) {
  return word +( arg ? ' ' + arg : '.');
}
