/* Coding Meetup #13 - Is the Meetup Language Diverse? kata
https://www.codewars.com/kata/58381907f8ac48ae070000de
*/

// function isLanguageDiverse(list) {
//   const languages = list.reduce((languages, person) => {
//     languages[person.language] += 1;
//     return languages;
//   }, {Python: 0, JavaScript: 0, Ruby: 0})
//   const counts = Object.values(languages);
//   return Math.max(...counts) / Math.min(...counts) <= 2;
// }

function isLanguageDiverse(list) {
  return list.reduce((languages, person, index) => {
    languages[person.language] += 1;
    if (index !== list.length -1 ) {
      return languages;
    } else {
      const counts = Object.values(languages);
      return Math.max(...counts) / Math.min(...counts) <= 2;
    }
  }, {Python: 0, JavaScript: 0, Ruby: 0})
}
