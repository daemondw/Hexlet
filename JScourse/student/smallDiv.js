const smallestDivisor = num => {
  if (num <= 0) return NaN;
  if (num === 1) return 1;

  let divisor = 2;
  while (divisor <= num/2 ) {
    if (num % divisor === 0) {
      return divisor;
    }
    divisor = divisor + 1;
  }
  return num;
}