/* Handshake Problem kata
https://www.codewars.com/kata/5574835e3e404a0bed00001b
 */
function getParticipants(handshakes) {
  let foundNum = false;
  let numberOfFarmers = 0;
  while (!foundNum) {
    let calculatedHandshakes = 0;
    for (let i = numberOfFarmers; i > 0; i--) {
      calculatedHandshakes += i;
    }
    if (calculatedHandshakes >= handshakes) {
      foundNum = true;
    }
    numberOfFarmers++;
  }
  return numberOfFarmers;
}
