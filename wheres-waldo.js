/*
Where's Waldo? kata
https://www.codewars.com/kata/638244fb08da6c61361d2c40
*/

function findWaldo(crowd) {
  const flattened = crowd.join('');
  for (const letter of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    const matches = flattened.match(new RegExp(letter, 'g'));
    if (matches && matches.length === 1) {
      const index = flattened.indexOf(letter);
      return [Math.floor(index / crowd[0].length), index % crowd[0].length]
    }
  }
}
