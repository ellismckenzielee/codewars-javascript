/*
  Node.js Async I/O kata
  https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript
*/

const { exec } = require('child_process')
function execute(command, callback) {
  exec(command, (error=null, argument) => {
    if (error) callback(error);
    else callback(null, argument);
  })
}
