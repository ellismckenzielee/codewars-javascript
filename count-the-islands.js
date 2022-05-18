/*
Count the Islands kata
https://www.codewars.com/kata/55a4f1f67157d8cbe200007b
*/

function countIslands(image){
  let islands = 0;
  for(let y = 0; y < image.length; y++) {
    for(let x = 0; x < image[0].length; x++) {
      if (image[y][x] === 1) {
        islands++;
        checkIsland(x,y,image);
      } 
    }
  }
  return islands;
}

function checkIsland (x,y, image) {
  if (x >= 0 && x < image[0].length && y >= 0 && y < image.length && image[y][x] != 0) {
    image[y][x] = 0;
    checkIsland(x - 1, y, image);
    checkIsland(x + 1, y, image);
    checkIsland(x, y - 1, image);
    checkIsland(x, y + 1, image);
    checkIsland(x + 1, y + 1, image);
    checkIsland(x - 1, y + 1, image);
    checkIsland(x - 1, y - 1, image);
    checkIsland(x + 1, y - 1, image);
  }
}
