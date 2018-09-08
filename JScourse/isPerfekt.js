const isPerfect = (num) => {
    const sum = (begin, end) => {
      if (begin === end) {
        return begin;       
      }
      else {
        return begin + sum(begin + 1 , end);
      }      
    } 
return sum(1, num) / num === 1;
}
isPerfect(6);