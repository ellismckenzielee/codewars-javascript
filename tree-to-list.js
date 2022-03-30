/* 
Tree to List kata
https://www.codewars.com/kata/56ef9790740d30a7ff000199
*/

function treeToArray(tree, root=true) {
  let arr = [];
  let nodes = [];
  let children = [];
  if (root) {
    nodes.push(tree);
  } else {
    nodes = tree;
  }
  for (const node of nodes) {
    arr.push(node.data)
    if (node.children) children.push(...node.children)
  };
  if (children.length === 0) return [...arr];
  return [...arr, ...treeToArray(children, false)];
  
}
