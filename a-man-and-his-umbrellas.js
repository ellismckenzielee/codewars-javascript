/* A Man and His Umbrellas kata
https://www.codewars.com/kata/58298e19c983caf4ba000c8d
*/

function minUmbrellas(weather) {
  const umbrellas = {
    home: 0,
    work: 0
  };
  let totalUmbrellas = 0;
  weather.forEach((type, indx) => {
    const location = ['home', 'work'][indx % 2];
    if (['rainy', 'thunderstorms'].includes(type)) {
      const umbrellaCount = umbrellas[location];
      if (umbrellaCount === 0) {
        umbrellas[location === 'home' ? 'work' : 'home']++;
        totalUmbrellas++;
      } 
      else {
        umbrellas[location]--;
        umbrellas[location === 'home' ? 'work' : 'home']++;
      }
    };
  });
  return totalUmbrellas;
}
