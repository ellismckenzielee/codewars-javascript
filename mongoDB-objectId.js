/*  
MongoDB Object ID kata
https://www.codewars.com/kata/52fefe6cb0091856db00030e
*/
var Mongo = {
  isValid: function (s) {
    const timestamp = this.getTimestamp(s);
    if (timestamp === false) return false;
    return isNaN(timestamp) ? false : true;
  },
  getTimestamp: function (s) {
    if (typeof s !== "string" || s.length !== 24) return false;
    if (!/^[a-z0-9]+$/.test(s)) return false;
    return new Date(parseInt(s.substring(0, 8), 16) * 1000);
  },
};
