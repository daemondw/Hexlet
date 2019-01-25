export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};