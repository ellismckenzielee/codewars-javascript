/*
Simple Fun #326a: The Shortest Time kata
https://www.codewars.com/kata/5953c6f8af7ac14fd4000021/train/javascript
*/

function shorterestTime(n,m,speeds) {
  const [elevatorTime, openTime, closeTime, johnTime] = speeds;
  const totalWalking = johnTime * n;
  const totalElevator = elevatorTime * (n + Math.abs(m-n)) + 2 * openTime + closeTime;
  const totalMixed = johnTime * Math.abs(m-n) + elevatorTime * m + 2*openTime + closeTime;
  return Math.min(totalWalking, totalElevator, totalMixed)
}
