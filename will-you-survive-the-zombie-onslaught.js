/*Will you survive the zombie onslaught? kata
https://www.codewars.com/kata/5deeb1cc0d5bc9000f70aa74
*/
function zombie_shootout(zombies, range, ammo) {
  range *= 2;
  const rangeRemaining = zombies - range;
  const ammoRemaining = zombies - ammo;
  if (rangeRemaining > 0 || ammoRemaining > 0) {
    if (rangeRemaining < ammoRemaining) {
      return `You shot ${zombies - ammoRemaining} zombies before being eaten: ran out of ammo.`;
    } else {
      return `You shot ${zombies - rangeRemaining} zombies before being eaten: overwhelmed.`;
    }
  } else {
    return `You shot all ${zombies} zombies.`;
  }
}
