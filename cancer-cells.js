/*
Cancel Cells kata
https://www.codewars.com/kata/5931614bb2f657c18c0001c3
*/

function cutCancerCells(organism){
  return organism.replace(/[a-bd-z]?C[a-bd-z]?|c/g,'')
}
