/*
Optimal Taxi Fare kata
https://www.codewars.com/kata/52f51502053125863c0009d7
*/

function calculateOptimalFare(D, T, V1, R, V2) {
  V1 = V1 / 60;
  V2 = V2 / 60;
  if (D/V2 <= T) return '0.00';
  const T1 = Math.round((D-(V2*T))/(V1-V2)*10000)/10000;
  const T2 = T - T1;
  if (T1 > T || T1 <= 0) return "Won't make it!";
  return (R*T1*V1).toFixed(2);
}
