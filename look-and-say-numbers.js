/* Look and say numbers kata 
https://www.codewars.com/kata/53ea07c9247bc3fcaa00084d
*/

function lookAndSay(data,len){
  if (len === 0) return [];
  const dataArr = data.split('');
  let [num, count] = [dataArr[0],0];
  let res = '';
  dataArr.forEach(elem => {
    if (elem === num) count ++;
    else {
      res+= `${count}${num}`
      count = 1;
      num = elem;
    }
  })
  res += `${count}${num}`
  return [res].concat(lookAndSay(res, len-1))
}
