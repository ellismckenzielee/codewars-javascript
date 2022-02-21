/* Playing with Toy Blocks - Can You Build a 4x4 Square? kata
https://www.codewars.com/kata/5cab471da732b30018968071
*/

function buildSquare(blocks) {
  let sortedBlocks = blocks.sort((a, b) => b - a);
  const rows = [];
  while (rows.length < 4 && sortedBlocks.length > 0) {
    const num = sortedBlocks[0];
    sortedBlocks = sortedBlocks.slice(1);
    const [isRow, updatedBlocks] = buildRow(num, sortedBlocks);
    if (isRow) {
      rows.push(1);
      sortedBlocks = updatedBlocks;
    }
  }
  if (rows.length >= 4) return true;
  return false;
}

function buildRow(num, blocks) {
  if (num === 4) return [true, blocks];
  const diff = 4 - num;
  const possibleBlocks = blocks.filter(block => block <= diff);
  if (possibleBlocks.length === 0) return [false, blocks]
  const nextBlock = possibleBlocks[0];
  const index = blocks.indexOf(nextBlock);
  return buildRow(num+nextBlock, blocks.slice(0, index).concat(blocks.slice(index+1)))
}
