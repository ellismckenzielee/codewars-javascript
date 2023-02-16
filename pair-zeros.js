/*
Pair Zeros Kata
https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript
*/

 function pairZeros(arr) {
   let currentZeros = 0;
   const paired = [];
   arr.forEach(elem => {
     if (elem != 0 || currentZeros == 0) {
       paired.push(elem)
       if (elem === 0) currentZeros++;
     } else {
       currentZeros = 0;
     }
   })
   return paired
}
