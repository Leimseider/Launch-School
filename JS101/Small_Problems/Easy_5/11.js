function timeOfDay(number) {
  let hours = Math.floor(number / 60);
  let finalMinutes = fixMinutes(number);
  let finalHours = fixHours(hours);
  return `${finalHours}:${finalMinutes}`;
}

function fixHours(hours) {
  hours %= 24;
  if (hours < 0) {
    hours += 24;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  return hours;
}

function fixMinutes(minutes) {
  if (minutes > 60 || minutes < 0) {
    minutes %= 60;
  }
  if (minutes < 0) {
    minutes += 60;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return minutes;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");