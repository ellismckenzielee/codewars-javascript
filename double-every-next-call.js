/*
Double Value Every Next Call kata
https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript
*/

class Class {
  static currentValue = 1;
  static getNumber() {
    const returnValue = this.currentValue;
    this.currentValue *=2;
    return returnValue;
  }
}
