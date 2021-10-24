//ASCII hex converter kata
//https://www.codewars.com/kata/52fea6fd158f0576b8000089

var Converter = {
  toAscii: function (hex) {
    const returnArr = [];
    for (let i = 0; i < hex.length; i += 2) {
      returnArr.push(hex.slice(i, i + 2));
    }
    return returnArr
      .map((chr) => String.fromCharCode(Number("0x" + chr)))
      .join("");
  },
  toHex: function (ascii) {
    const returnArr = [];
    for (let i = 0; i < ascii.length; i++) {
      returnArr.push(ascii[i].charCodeAt().toString(16));
    }
    return returnArr.join("");
  },
};
