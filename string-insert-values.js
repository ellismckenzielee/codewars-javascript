/* String Insert Values kata
https://www.codewars.com/kata/529b54d9aba78c924d00088e
*/
var format = function (str, obj) {
  let counter = 0;
  let openedBrackets = false;
  let startIndex, contents;
  while (counter < str.length) {
    const letter = str[counter];
    if (letter === '{') {
      openedBrackets = true;
      startIndex = counter;
      counter++;
    }
    else if (letter === '}' && openedBrackets === true) {
      openedBrackets = false;
      contents = str.slice(startIndex+1, counter)
      let value;
      if (/[0-9]+/.test(contents)) {
        value = obj[parseInt(contents)];
      }
      else if (Object.keys(obj).includes(contents)) {
        value = obj[contents];
      } else {
        value = '{' + contents + '}'
        
      }
      str = str.slice(0, counter-contents.length-1) + value +  str.slice(counter+ 1)
      counter += value.toString().length-2;
    }
    else {
      counter ++;
    }
  }
  return str;
};
