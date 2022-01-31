/* Hard Time Bomb kata
https://www.codewars.com/kata/52532cc8e9ea83b89b000008
*/

var wireCode =
  global[
    Object.keys(global).reduce((ID, key) => {
      const reg = /^boom[0-9]$/gi;
      if (reg.test(key)) return key;
      return ID;
    }, "")
  ];

Bomb.CutTheWire(wireCode);
