/*
Divide and Conquer kata 
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
*/
function divCon(x){
  let [strTotal, otherTotal] = [0, 0];
  x.forEach(elem => {
    if (typeof elem === "string") strTotal += +elem;
    else otherTotal += elem;
  })
  return otherTotal - strTotal;
}
