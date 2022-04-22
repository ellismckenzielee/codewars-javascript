/*
chmod calculator in octal kata
https://www.codewars.com/kata/57f4ccf0ab9a91c3d5000054
*/
function chmodCalculator(perm) {
  let output = '';
  for (let type of ['user', 'group', 'other']) {
    if (perm[type] === undefined) output += 0;
    else {
        output += convertPermissionsToNumber(perm[type]);
    }
  }
  return output;
}

function convertPermissionsToNumber (permissions) {
  let total = 0;
  const [read, write, execute] = permissions.split('');
  total += read === 'r' ? 4 : 0
  total += write === 'w' ? 2 : 0
  total += execute === 'x' ? 1 : 0
  return total;
}
