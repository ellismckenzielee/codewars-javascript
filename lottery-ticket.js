/* 
Lottery Ticket
https://www.codewars.com/kata/57f625992f4d53c24200070e
*/

function bingo(ticket, win){
  return ticket.reduce((miniWins, cur) => {
    const charCodes = cur[0].split('').map(letter => letter.charCodeAt(0));
    return charCodes.includes(cur[1]) ? miniWins + 1 : miniWins
  }, 0) >= win ? 'Winner!' : 'Loser!'
}
