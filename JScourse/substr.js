const substr = (str, ind = 0, length = str.length) => {
  if (length < 0) {
    length = 1;
  } else if (length > str.length) {
    length = str.length;
  } else if (length === 0) {
    return '';
  } 
  let finalInd = length + ind;
  let res = '';
  if (ind < 0) {
    ind = 0;
  } else if (ind > str.length - 1) {
    return '';
  } else if (finalInd > str.length - 1) {
    for (let i = ind; i < finalInd; i += 1) {
    res += str[i];
  }
  return res;
  } else {
    return str;
  }
    
};
export default substr;