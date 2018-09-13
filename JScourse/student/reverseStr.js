const reverse = (str) => {
  let res = '';
  console.log(res);
 if (str.length === res.length) {
   console.log(res);
   return res;
 } else {
  res += str[str.length - 1];
  console.log(res);
  return reverse(str);
 }
};