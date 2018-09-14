const substr = (str, stInd = 0, length = str.length) => {
  if (str === '' || stInd > str.length || length === 0) return '';
  const firstInd = stInd < 0 ? 0 : stInd;
  const lastInd = (length > str.length) ? str.length : (length < 0) ? firstInd + 1 :(firstInd + length > str) ? str.length : firstInd + length;

  const iter = (begin, acc) => {
    if (begin === lastInd) return acc;
    let newAcc = acc + str[begin];
    return iter(begin + 1, newAcc);
  };

  return iter(firstInd, '');
};