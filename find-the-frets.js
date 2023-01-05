/*
Guitar #1: Find the Frets kata
https://www.codewars.com/kata/5fa49cfb19923f00299eae22
*/

function getFrets(note, exact, string, position) {
  const notes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  let strings = [[],[],[],[],[],[]];
  const starts = [0, 5, 10, 3, 7, 0].reverse();
  const output = [];
  for (let i = 0; i < 6; i++) {
    let current = starts[i];
    let fret = 0;
    while (strings[i].length < 24) {
      const nextNote = notes[current % notes.length];
      strings[i].push([nextNote, fret]);
      current++;
      fret++;
    }
  }
  let fbSections;
  if (exact) {
      const notePosition = strings[string-1].filter((strNote) => strNote[0] == note)[position - 1];
      fbSections = getFretboardSections(string, notePosition[1])}
  ;
  for (let i = 0; i < strings.length; i++){
    let minimum = 0;
    let maximum = 23;
    if (fbSections) {
      section = fbSections[i];
      minimum = section[0];
      maximum = section[1] > 23 ? 23 : section[1]
    }
    for (let j = 0; j < 24; j ++) {
     const nt = strings[i][j];
      if (nt[0] == note && j >= minimum && j < maximum) output.push([i + 1,j ])
    }
  }
  return output;
}

function getFretboardSections(string, position) {
  const intervals = [5, 4, 5, 5, 5];
  const firstStringSectionStart = position-intervals.slice(0, string - 1).reduce((tot, cur) => tot + cur, 0);
  const firstStringSectionEnd = firstStringSectionStart + 12;
  const stringSections = [[firstStringSectionStart, firstStringSectionEnd],[],[],[],[],[]]
  for(let i = 1; i < 6; i ++){ 
    const totalInterval = intervals.slice(0, i).reduce((tot, cur) => tot + cur, 0)
    stringSections[i] = [firstStringSectionStart + totalInterval, firstStringSectionEnd + totalInterval];
  }
  return stringSections;
}
