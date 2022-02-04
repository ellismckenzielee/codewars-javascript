/* Coding Meeting #16 - Ask for Missing Details kata
https://www.codewars.com/kata/583d972b8bbc0402cf000121
*/

function askForMissingDetails(list) {
  return list.reduce((output, person) => {
    for (const key in person) {
      if (person[key] === null) {
        person['question'] = `Hi, could you please provide your ${key}.`;
      }
    }
    if (person['question']) {
      output.push(person)
    }
    return output
  }, [])
}
