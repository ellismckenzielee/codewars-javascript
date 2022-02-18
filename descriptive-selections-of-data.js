/* Descriptive Selections of Data kata
https://www.codewars.com/kata/529875459ce954d6a800026c
*/

function selectNames(table) {
  return rest(table.map(first))
}

function selectVoices(table) {
  return rest(table.map(third))
}

function selectNamesAndVoices(table) {
  return zip(selectNames(table), selectVoices(table))
}
