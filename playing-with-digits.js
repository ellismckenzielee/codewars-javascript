function digPow(n, p){
  // Given a positive integer, check to see if there is a solution to k
  // (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
  positiveIntegerN = String(n);
  sum = 0;
  
  for (i = 0; i < positiveIntegerN.length; i ++) {
    sum += Math.pow(parseInt(positiveIntegerN[i]),(p + i))
  }

  console.log(sum)

  if ((sum % n) ==0) {
  	return (sum/n)
  }
  else {
  	return -1
  }
}