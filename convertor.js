/*
Convertor Kata
https://www.codewars.com/kata/596fd97f65ad2fc072000037/train/javascript
*/
class Converter {
  constructor(number, unit) {
    this.number = number;
    this.unit = unit;
    this.units = ['B', 'KB', 'MB', 'GB', 'TB'];
  }
  
  get size() {
    const formatted_num = Math.floor(this.number * 1000)/1000;
    return `${formatted_num} ${this.unit}`;
  }
  
  unit() {
    return this.unit;
  }
  
 toB() {
    this.convertor('B')
  }
  
 toKB() {
    this.convertor('KB')
  }
  
 toMB() {
    this.convertor('MB')
  }
  
 toGB() {
    this.convertor('GB')
  }
  
  toTB() {
    this.convertor('TB')
  }
  
  convertor(target){
    const current_index = this.units.indexOf(this.unit);
    const target_index = this.units.indexOf(target);
    this.unit = target;
    this.number = this.number * 2 ** - (10*(target_index - current_index));
    }
  
}
