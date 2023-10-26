/* exported getWords */
function getWords(string) {
  if (string === '') {
    return string.split(string);
  }
  return string.split(' ');
}
console.log('Value of getWords:', getWords('LearningFuze'));
console.log('Value of getWords:', getWords('Web Development'));
console.log('Value of getWords:', getWords('Cascading Style Sheets'));
console.log(
  'Value of getWords:',
  getWords('European Computer Manufacturers Association')
);
console.log('Value of getWords:', getWords(''));
