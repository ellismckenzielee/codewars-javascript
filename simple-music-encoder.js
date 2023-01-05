/*
A Simple Music Encoder kata
https://www.codewars.com/kata/58db9545facc51e3db00000a
*/

function compress(music) {
  return handleIntervals(handleRepeats(music)).join(',')
}

function handleRepeats(music){
  music.push('stop');
  const musicWithoutRepeats = [];
  let current = music[0];
  let count = 0;
  for(let i = 0; i < music.length; i++){
    const num = music[i];
    if(num === current) {
      count++;
    } else {
      musicWithoutRepeats.push(count > 1 ?`${current}*${count}` : `${current}`);
      count = 1;
      current = num;
    }
  }
  return musicWithoutRepeats;
}

function handleIntervals(music) {
  const musicIntervalsCompressed = [];
  let temp = [];
  for (let i = 0; i < music.length; i ++) { 
    if (temp.length < 2){
      temp.push(music[i]);
    } else {
      const interval = temp[1] - temp[0];
      const num = music[i];
      if (num - temp.slice(-1)[0] !== interval) {
        if (temp.length <= 2) {
            musicIntervalsCompressed.push(temp.shift(0))
            temp.push(num)
        }
        else {
           const compressed = compressTemp(temp, interval)
            musicIntervalsCompressed.push(compressed); 
            temp = [num];
        }
      }
      else {
        temp.push(num);
      }
    }
  }  
  musicIntervalsCompressed.push(temp.length > 2 ? compressTemp(temp, temp[1] - temp[0]) : temp)
  return musicIntervalsCompressed;
}

function compressTemp(arr, interval) {
  return `${arr[0]}-${arr.slice(-1)[0]}${Math.abs(interval) > 1 ? '/' + Math.abs(interval) : ''}`;
}
