function dms(angle) {
  let integer = Math.floor(angle);
  let minutes = Math.floor((angle - integer) * 60);
  let seconds = Math.floor(((angle - integer - (minutes / 60)) * 3600));
  if (minutes === 0) {
    minutes = '00';
  } else if (minutes <= 10) {
    minutes = '0' + minutes;
  }
  if (seconds === 0) {
    seconds = '00';
  } else if (seconds <= 10) {
    seconds = '0' + seconds;
  }
  console.log(`${integer}°${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"