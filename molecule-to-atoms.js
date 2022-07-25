/*
Molecule to Atoms kata
https://www.codewars.com/kata/52f831fa9d332c6591000511/train/javascript/62d9428f15350958c869f4c4
*/

function parseMolecule(formula) {
  const output = {};
  const bracketsRegex = /[\(\[\{]([A-Z][a-z]*[0-9]*)+[\}\]\)]\d/gi;
  const atomRegex = /[A-Z][a-z]*[0-9]*/g;
  while(formula.match(bracketsRegex)) {
    formula = formula.replace(bracketsRegex, (...args) =>{ 
      let match = args[0];
      const multiplier = match.match(/[0-9]+$/gi)[0];
      match = match.replace(/[0-9]+$/gi, '');
      const updatedMatch = match.replace(atomRegex, (x)=> {
      const [atom, num] = getAtomAndNum(x);
        return atom + (num * multiplier);
      }).replace(/[\(\)\{\}\[\]]/gi, '')
      return updatedMatch});

  }
  const matches = formula.match(atomRegex)
  if (matches) {
    matches.forEach(match => {
      const [atom, num] = getAtomAndNum(match)
      if(atom in output) {
        output[atom]+=num;
      } else{
        output[atom] = num;
      }
    });
  }
  return output;
}

const getAtomAndNum = (str) => {
  const atom = str.match(/[A-Z][a-z]*/g)[0];
  let num = str.match(/[0-9]+/g);
  if (!num) num = 1;
  else num = num[0];
  return [atom, parseInt(num)]
}
