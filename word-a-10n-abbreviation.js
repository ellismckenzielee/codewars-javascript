//word a 10n (abbreviatation) kata
//https://www.codewars.com/kata/5375f921003bf62192000746

function abbreviate(string) {
  string = string.replace(/[a-zA-Z]+/gi, (match) => {
    if (match.length > 3) {
      return (
        match.slice(0, 1) + (match.length - 2).toString() + match.slice(-1)
      );
    }
    return match;
  });
  return string;
}
