function disemvowel(str) {
  //Removes all vowels from a string
  str2 = '';
  for (i = 0; i< str.length; i++) {
  	x = str[i].toLowerCase()
  	if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
  	}
  	else {
  		str2 += str[i]
  	}
  }
return str2
}