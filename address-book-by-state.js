


/* address book by state kata 
https://www.codewars.com/kata/59d0ee709f0cbcf65400003b
*/
function byState(str) {
  const addresses = str.trim().split('\n');
  const stateGroups = {};
  const states = {
    'AZ': 'Arizona',
    'CA': 'California',
    'ID': 'Idaho',
    'IN': 'Indiana',
    'MA': 'Massachusetts',
    'OK': 'Oklahoma',
    'PA': 'Pennsylvania',
    'VA': 'Virginia'
  }
  addresses.forEach(address => {
    const state = states[address.match(/[A-Z]{2}$/g)[0]];
    if (!stateGroups.hasOwnProperty(state)) stateGroups[state] = [];
    stateGroups[state].push(address.slice(0,-2).split(',').join('') + state)
    stateGroups[state] = stateGroups[state].sort((a, b) => {
      if (a > b) return 1;
      else return -1;
    })
  });

  
  let output = '';
  Object.keys(stateGroups).sort((a, b) => a > b ? 1 : -1 ).forEach(state => {
    output += '\r\n ' + state;
    stateGroups[state].forEach(address => {
      output += '\r\n..... ' + address;
    })
  })
  
  return output.trim();
}
