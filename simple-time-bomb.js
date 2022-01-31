/* Simple Time Bomb kata
https://www.codewars.com/kata/523c7fbb0d47a759580000e2
*/

const globalKeys = [
  "console",
  "global",
  "process",
  "Buffer",
  "clearImmediate",
  "clearInterval",
  "clearTimeout",
  "setImmediate",
  "setInterval",
  "setTimeout",
  "__filename",
  "exports",
  "module",
  "__dirname",
  "require",
];
var wire;
for (const key in global) {
  if (!globalKeys.includes(key)) {
    wire = key;
  }
}
CutTheWire(this[wire]);
