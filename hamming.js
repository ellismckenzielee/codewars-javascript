/*
Hamming Distance kata
https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript
*/

function hamming(a,b) {
	if (!(a.length && b.length)) {
    return 0;
  } else {
    return (a[0] === b[0] ? 0 : 1) + hamming(a.slice(1), b.slice(1));
  }
}
