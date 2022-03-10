/* IP address to number kata
https://www.codewars.com/kata/541a354c39c5efa5fa001372
*/

function ipToNum(ip) {
  const octets = ip.split('.');
  const binary = octets.map(octet => {
    const bin = Number(octet).toString(2);
    return '0'.repeat(8-bin.length) + bin;
  })
  return parseInt(binary.join(''), 2);
}

function numToIp(num) {
  let binary = num.toString(2);
  const octets = [];
  binary = '0'.repeat(32-binary.length) + binary;
  for (let i = 0; i < 32; i+=8){
    octets.push(parseInt(binary.slice(i, i+8),2).toString(10))
  }
  return octets.join('.');
}
