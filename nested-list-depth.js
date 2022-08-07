/*
Nested List Depth kata
https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e/train/javascript
*/

function arrayDepth(array) {
	return array.reduce((currentMax, item) => {
    if (Array.isArray(item)) {
      return 1 + arrayDepth(item)
    } else {
      return currentMax
    }
  },1)
}
