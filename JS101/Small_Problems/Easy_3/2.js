function annoyingArt(string) {
  console.log('+-' + '-'.repeat(string.length) + '-+');
  console.log('|' + ' '.repeat((string.length + 2)) + '|');
  console.log('| ' + string + ' |');
  console.log('|' + ' '.repeat((string.length + 2)) + '|');
  console.log('+-' + '-'.repeat(string.length) + '-+');
}

annoyingArt('To boldly go where no one has gone before.');
annoyingArt('');