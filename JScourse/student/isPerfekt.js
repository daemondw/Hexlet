const isPerfect = (num) => {
  let res = 0;
  if (num < 6) {
    return false;
  }
  for (let i = 1; i < num; i += 1) {
    if (num % i === 0) {
      res += i;
    }
  }
  if (res === num) {
    return true;
  }
  return false;
};