/*
Grab CSV Columns kata
https://www.codewars.com/kata/5276c0f3f4bfbd5aae0001ad
*/

function csvColumns(csv, indices) {
  const csvArray = csvToArray(csv);
  const filteredCsvArray = csvArray.map(row => {
    return row.filter((item, indx) => indices.includes(indx))
  });
  return arrayToCsv(filteredCsvArray)
}

function csvToArray (csv) {
  const rows = [];
  csv.split('\n').forEach(joinedRow => {
    rows.push(joinedRow.split(','));
  });
  return rows;
}

function arrayToCsv (array) {
  let csvString = '';
  array.forEach(row => {
    csvString += row.join(',') + '\n'
  });
  return csvString.trim()
}
