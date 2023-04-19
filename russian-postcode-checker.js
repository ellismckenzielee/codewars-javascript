/*
Russian Postal Code Checker  kata
https://www.codewars.com/kata/552e45cc30b0dbd01100001a
*/

function zipvalidate(postcode){
  return postcode.length === 6 && postcode.replace(/[^\d]/, '').length === 6 && !'05789'.includes(postcode[0]);
}
