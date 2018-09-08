const substr = (str, ind = 0, length = str.length) => {
  if (length < 0) {
    return length = 1;
  } else if (length > str.length) {
    return length = str.length;
  } else if (length === 0) {
    return length = '';
  } else if (ind > str.length || ind < 0 && length > str.length || length < 0) {
    return substr(str, 0, str.length);
  } else if (ind < 0) {
    return ind = 0;
  } else if (ind > str.length) {
    return ind = '';
  }
    return length = str.length - ind;
};
export default substr;