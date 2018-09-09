const fizzBuzz = (begin, end) => {
  const fizz = 'Fizz';
  const buzz = 'Buzz';
  const fizzAndBuzz = 'FizzBuzz';
  if (begin > end) {
    return null;
  } else if (begin === end) {
    console.log(begin);
  }
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(fizzAndBuzz);
    } else if (i % 3 === 0) {
      console.log(fizz);
    } else if (i % 5 === 0) {
      console.log(buzz);
    } else {
      console.log(i);
    }
  }
};