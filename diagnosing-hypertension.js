/*
Diagnosing Hypertension kata
https://www.codewars.com/kata/621470ede0bb220022c9e396/train/javascript
*/

let hypertensive = function(patients) {
  return patients.reduce((num, patient) => {
    let systolicTotal = 0;
    let diatolicTotal = 0;
    let maxExceeded = false;
    let count = 0;
    patient.forEach(measurement => {
     const [systolic, diatolic] = measurement.split('/');
      systolicTotal += parseInt(systolic);
      diatolicTotal += parseInt(diatolic);
      if (systolic >= 180 && diatolic >= 110) maxExceeded = true;
      count++;
   })
    if (maxExceeded) return num + 1;
    let systolicAvg = systolicTotal / count;
    let diatolicAvg = diatolicTotal / count;
    if (count <= 1) return num;
    if (systolicAvg >= 140 || diatolicAvg >= 90 ) return num + 1;
    else return num;
  }, 0);
}
