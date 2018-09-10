const reverseInt = (num) => {
  const str = num === 0 ? 0 : num < 0 ? String(Math.abs(num)) : String(num);
  if (str === 0) {
    return 0;
  }
  let res = '';
  for (let i = str.length; i > 0; i -= 1) {
    res += str[i - 1];
  }
  if (num < 0) {
    return Number(res) * (-1);
  }
  return Number(res);
};