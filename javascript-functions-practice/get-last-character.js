/* exported getLastCharacter */
function getLastCharacter(string) {
  return string.charAt(string.length - 1);
}

console.log(
  'Value of getLastCharacter:',
  getLastCharacter('he who shall not be named')
);
