const isPerfect = (num) => {
  if (num === 0) return false;

  let sum = 0;

  for (let divisor = 1; divisor < num; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};