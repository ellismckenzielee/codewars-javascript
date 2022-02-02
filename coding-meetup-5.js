/*
Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages kata
https://www.codewars.com/kata/5828713ed04efde70e000346
*/

function countLanguages(list) {
  return list.reduce((languages, current) => {
    const language = current.language;
    if (!Object.keys(languages).includes(language)) {
      languages[language] = 1;
    } else {
      languages[language] += 1;
    }
    return languages;
  }, {})
}
