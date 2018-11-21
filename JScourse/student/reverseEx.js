const reverse = (str) => {
  let i = 1;
  const leng = str.length;
  if (leng === 1 || str === '') {
    return str;
  }
  const res = '';
  return res + reverse(str.substr(-1 * i));
};