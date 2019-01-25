const substr = (str, inputStart = 0, inputLength = str.length) => {
  const length = inputLength < 0 ? 1 : inputLength;
  const start = inputStart < 0 ? 0 : inputStart;
  let result = '';

  for (let i = 0; i < length && i + start < str.length; i += 1) {
    result += str[i + start];
  }

  return result;
};

export default substr;