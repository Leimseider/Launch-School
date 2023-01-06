function afterMidnight(time) {
  let splitTime = time.split(':');
  let result = hoursToMinutes(splitTime[0]) + +splitTime[1];
  if (time === '24:00' || time === '00:00') {
    result = 0;
  }
  return result;
}

function beforeMidnight(time) {
  let splitTime = time.split(':');
  let midnight = 24 * 60;
  let result = midnight - (hoursToMinutes(splitTime[0]) + +splitTime[1]);
  if (time === '24:00' || time === '00:00') {
    result = 0;
  }
  return result;
}

function hoursToMinutes(hours) {
  return hours * 60;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

