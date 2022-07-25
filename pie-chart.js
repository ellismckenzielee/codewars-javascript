/*
Pie Chart Kata
https://www.codewars.com/kata/59006675bb1fb31ae400012b
*/

function pieChart(obj){
  const [jsObj, newObj] = [JSON.parse(obj), {}];
  let tot = obj.match(/(?<=[: ]+)[0-9]+[.]*[0-9]*/g).reduce((tot, cur) => tot + parseInt(cur), 0);
  Object.keys(jsObj).forEach(key => {
   const oldValue = jsObj[key];
   const newValue = Math.round((oldValue/tot)*360 * 100) / 100
    newObj[key] = newValue;
  });
 return JSON.stringify(newObj)
  
}
