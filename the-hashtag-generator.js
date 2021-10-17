//the hashtag generator kata
//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    if (/[a-zA-Z]/.test(str) !== true){
      return false;
    }

  let words = str.split(' ');
  let wordsTitled = words.map(words => words.slice(0,1).toUpperCase() + words.slice(1).toLowerCase());
  let hashtag = '#' + wordsTitled.join('');
  return hashtag.length <=140 ? hashtag : false;
  
}