const sumDigits = (numberAsString) => {
  let sum = 0;
  for (let i = 0; i < numberAsString.length; i += 1) {
    sum += Number(numberAsString[i]);
  }
  return sum;
};

export default (number) => {
  const numberAsString = String(number);

  const leftPart = numberAsString.substr(0, 3);
  const rightPart = numberAsString.substr(3);

  return sumDigits(leftPart) === sumDigits(rightPart);
};