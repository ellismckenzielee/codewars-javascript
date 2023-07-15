/*
Help Suzuki Purchase his Tofu kata
https://www.codewars.com/kata/57d4ecb8164a67b97c00003c/solutions/javascript
*/

function buyTofu(cost,box){
  const x = box.split(' ').reduce((reducer, elem) => {
    let val = 0;
    if (elem == 'mon') {
      val = 1;
      reducer[0]++;
    }
    if (elem =='monme') {
      val = 60;
     reducer[1]++;
    }
    reducer[2] += val;
    return reducer
  }, [0,0,0,0]);
  let total = 0;
  let mons = x[0];
  let monmes = x[1];
  const monmesRequired = Math.min(Math.floor(cost / 60), monmes);
  const monsRequired = cost - 60*monmesRequired;
  if (monmes < monmesRequired || mons < monsRequired) return 'leaving the market';
  else x[3] = monmesRequired + monsRequired;
  return x;
}
