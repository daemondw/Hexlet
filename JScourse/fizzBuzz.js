const fizzBuzz = (begin, end) => {
  if (begin > end) {
    return null; 
    } else if (begin === end) {
      return true;
      }
    let a, i;
    for (i = 0; i < end; i += 1) {
      a = i + begin;
      if (a % 3 === 0 && a % 5 !== 0) {
        console.log('Fizz');
      } else if (a % 5 === 0 && a % 3 !== 0) {
        console.log('Buzz');
      } else if (a % 3 === 0 && a % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log(a);
      }
  }
};