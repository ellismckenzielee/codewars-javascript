/* Streams - Endless Arrays kata 
https://www.codewars.com/kata/52744341faf5480173000bc7
*/

var Stream = function(start, output, stepping) {
  this.start = start;
  this.n = this.start;;
  this.output = output;
  this.stepping = stepping;
  
};
Stream.prototype = {
  head: function () {
    return this.output(this.n);
  },
  tail: function () {
;   return new Stream(this.stepping(this.n), this.output, this.stepping);
  }
};
