const invertCase = (str) => {
  let strNew = '';
  if (str === '') {
    return '';
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str[i].toUpperCase()) {
      strNew += str.charAt(i).toLowerCase();
      console.log(strNew);
    } else {
      strNew += str.charAt(i);
      console.log(strNew);
    }
  }
    return strNew;
};