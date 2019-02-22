function spinWords(str){
  // Returns the string, where words with length > 5 are reversed
  strSplit = str.split(" ")
  total = "";

  for (i = 0; i < strSplit.length; i++) {
  	if (strSplit[i].length >= 5) {
  		strSplit2 = strSplit[i].split('');
  		strsplit2Reverse = strSplit2.reverse();
  		reverse = strsplit2Reverse.join('');
  		total += reverse + " ";
  	}
  	else {
  		total += strSplit[i] + " ";
  	}
  }
  return total.substr(0,total.length-1)
}