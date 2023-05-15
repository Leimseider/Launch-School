function scramble(str1, str2) {
  let testArray = str2.split('');
  let firstArray = str1.split('');
  for (let idx = 0; idx < testArray.length; idx++) {
    if (!firstArray.includes(testArray[idx])) {
      return false;
    }
    firstArray[firstArray.indexOf(testArray[idx])] = '';
  }
  return true;
}

scramble('scriptjavx',        'javascript' );


/*scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False*/