/* Ping Pong kata 
https://www.codewars.com/kata/5ea39ab1d8425e0029fcd035
*/
function pingPong(sounds) {
  let rally = [];
  const scores = {'ping': 0, 'pong': 0}
  const losers = [];
  sounds.split('-').forEach(sound => {
    if (['ping', 'pong'].includes(sound)) rally.push(sound)
    else if (rally.length !== 0) {
      const server = rally[0];
      const winner = rally.slice(-1)[0] === 'ping' ? 'pong' : 'ping';
      if (server === winner) {
        scores[winner] += 1;
      }
      const loser = 'ping' === winner ? 'pong' : 'ping';
      losers.push(loser);
      rally = [];

    }
  })
  const [pingScore, pongScore] = [scores['ping'], scores['pong']]
  
  return pingScore > pongScore ? 'ping' : pongScore > pingScore ? 'pong' : losers.slice(-1)[0] === 'pong' ? 'ping' : 'pong'
}
