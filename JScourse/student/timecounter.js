const timecounter = (min) => {
  let res;
  if (min < 10) {
    res = `00:0${min}`;
  } else if (min > 9 && min < 60) {
    res = `00:${min}`;
  } else if (min % 60 === 0 && ((min / 60) < 24)) {
    if (min / 60 < 10) {
      res = `0${min / 60}:00`;
    } else if (min / 60 > 9) {
      res = `${min / 60}:00`;
    }
  } else if (Math.floor(min / 60) < 10 && min % 60 < 10) {
    res = `0${Math.floor(min / 60)}:0${min % 60}`;
  } else if (Math.floor(min / 60) > 9 && min % 60 < 10) {
    res = `${Math.floor(min / 60)}:0${min % 60}`;
  } else if (Math.floor(min / 60) > 9 && min % 60 > 9) {
    res = `${Math.floor(min / 60)}:${min % 60}`;
  } else if (Math.floor(min / 60) < 10 && min % 60 > 9) {
    res = `0${Math.floor(min / 60)}:${min % 60}`;
  }
  return res;
};


// export default (rawMinutes) => {
//   const hours = Math.floor(rawMinutes / 60);
//   const formattedHours = hours >= 10 ? hours : `0${hours}`;

//   const minutes = rawMinutes % 60;
//   const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

//   return `${formattedHours}:${formattedMinutes}`;
// };