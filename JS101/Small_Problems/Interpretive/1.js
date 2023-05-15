function lightsOn(number) {
  let lightTracker = {};
  turnOnLights(number, lightTracker);
  switchLights(number, lightTracker);
  console.log(pushToArray(lightTracker));
}

function switchLights(number, lightTracker) {
  for (let passIdx = 2; passIdx <= number; passIdx++) {
    for (let switchIdx = 1; switchIdx <= number; switchIdx++) {
      if (switchIdx % passIdx === 0) {
        if (lightTracker[switchIdx] === 'on') lightTracker[switchIdx] = 'off';
        else lightTracker[switchIdx] = 'on';
      }
    }
  }
}

function turnOnLights(number, lightTracker) {
  for (let idx = 1; idx <= number; idx++) {
    lightTracker[idx] = 'on';
  }
}

function pushToArray(object) {
  let lightArray = [];
  for (let idx = 0; idx <= Object.keys(object).length; idx++) {
    if (object[idx] === 'on') {
      lightArray.push(idx);
    }
  }
  return lightArray;
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
