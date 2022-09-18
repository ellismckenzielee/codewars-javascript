/*
1RM Calculator Kata
https://www.codewars.com/kata/595bbea8a930ac0b91000130
*/

function calculate1RM(w, r){
  const funcs = [epley, mcGlothin, lombardi];
  const results = funcs.map(func => func(w,r));
  return r === 1 ? w : r === 0 ? 0 : Math.round(Math.max(...results));
}

const epley = (w, r) => {
  return w*(1+r/30);
}

const mcGlothin = (w, r) => {
  return (100*w)/(101.3-(2.67123*r));
}

const lombardi = (w, r) => {
  return w * (r) ** 0.1;
}
