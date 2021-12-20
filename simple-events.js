/*Simple Events kata
https://www.codewars.com/kata/52d3b68215be7c2d5300022f
*/
function subscribe(func) {
  this.handlers.push(func);
}

function emit(...args) {
  for (let i = 0; i < this.handlers.length; i++) {
    const func = this.handlers[i];
    func(...args);
  }
}

function unsubscribe(removeFunc) {
  let funcIndex;
  for (let i = 0; i < this.handlers.length; i++) {
    const func = this.handlers[i];
    if (func === removeFunc) {
      funcIndex = i;
    }
    if (funcIndex !== undefined) {
      this.handlers = this.handlers.slice(0, funcIndex).concat(this.handlers.slice(funcIndex + 1));
    }
  }
}
function Event() {
  this.handlers = [];
  this.subscribe = subscribe;
  this.emit = emit;
  this.unsubscribe = unsubscribe;
}
