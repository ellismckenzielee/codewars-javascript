/* 
RGB to Hex Conversion kata
https://www.codewars.com/kata/513e08acc600c94f01000001
*/

function rgb(r, g, b){
  [r,g,b] = sanitiseRGB(r,g,b);
  let output = '';
  for (const num of [r,g,b]) {
      const remainder = num % 16;
      const ints = Math.floor(num / 16);
      const firstDigit = ints.toString(16);
      const secondDigit = (remainder * 16).toString(16);
    output += `${firstDigit.toUpperCase()}${secondDigit.replace(/(?<=[1-9a-f])0+$/, '').toUpperCase()}`
  }
  return output;
}

function sanitiseRGB (r,g, b) {
  r = r < 0 ? 0 : r > 255 ?  255 : Math.round(r);
  g = g < 0 ? 0 : g > 255 ?  255 : Math.round(g);
  b = b < 0 ? 0 : b > 255 ?  255 : Math.round(b);
  return [r,g,b];
}
