/*
Simple Fun #213: isFunction? kata
https://www.codewars.com/kata/590001c24c5d02625b00005e
*/

function isFunction(pairs) {
  const mappings = {};
  for(let i = 0; i < pairs.length  ; i++) {
      const input = pairs[i][0];
      const output = pairs[i][1];
      if (!Object.keys(mappings).includes(input.toString())) {
        mappings[input] = output;
      } else {
        console.log(true)
        const previousOutput = mappings[input];
        if (previousOutput !== output) return false;
      }
    
  }
  console.log(mappings)
  return true;
}
