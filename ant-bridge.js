/* Ant Bridge kata
https://www.codewars.com/kata/599385ae6ca73b71b8000038
*/

var antBridge = function(ants, terrain) {
  const bridge = ['-.', '.', '.-'];
  for (let i = 0; i < terrain.length; i++) {
    const step = terrain[i];
    const startEdge = terrain.slice(i, i+2);
    const endEdge = terrain.slice(i-1, i+1);
    if (bridge.includes(step) || bridge.includes(endEdge) || bridge.includes(startEdge)) {
      const frontAnt = ants.slice(-1);
      const rest = ants.slice(0, -1);
      ants = frontAnt + rest;
    }
  }
  return ants;
}
