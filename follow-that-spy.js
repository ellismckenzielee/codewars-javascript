/* Follow That Spy kata
https://www.codewars.com/kata/5899a4b1a6648906fe000113
*/

function findRoutes(routes) {
  const output = [].concat(routes[0]);
  while(output.length <= routes.length ) {
    for(const route of routes) {
      const source = route[0];
      const destination = route[1];
      if (source === output.slice(-1)[0]) {
        output.push(destination);
      } else if(destination === output[0]) {
        output.unshift(source);
      }
    }
  }
 return output.join(', ');
}
