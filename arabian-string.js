/* 
Arabian String kata
https://www.codewars.com/kata/525821ce8e7b0d240b002615/train/javascript
*/

function camelize(str){
  if (str === '' || /^[ ]+$/.test(str)) return str;
  const strNoSymbols = str.replace(/[^0-9a-zA-Z]/g, () => ' ').replace(/[ ]+/g, () => ' ').trim();
  const strArr = strNoSymbols.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return strArr.join('')
}
