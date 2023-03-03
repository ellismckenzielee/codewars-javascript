/*
Snakes & Ladders kata
https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/train/javascript
*/

var snakesAndLadders = function(board, dice) {
  let position = 0;
  for(let i = 0; i < dice.length; i ++) {
    const roll = dice[i];
    position = getNewPosition(board, position, roll);
    if (position === board.length - 1) return position;
  }
  return position
}

const getNewPosition = (board, position, roll) => {
  let newPosition = position + roll < board.length  ? position + roll : position;
  let newPositionValue = board[newPosition];
  while (newPositionValue != 0 && position != board.length) {
    newPosition = newPosition + newPositionValue;
    newPositionValue = board[newPosition]
  };
  return newPosition;
}
