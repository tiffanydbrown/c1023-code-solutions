/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  } else if (char === 'e' || char === 'E') {
    return true;
  } else if (char === 'i' || char === 'I') {
    return true;
  } else if (char === 'o' || char === 'O') {
    return true;
  } else if (char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
console.log('Value of isVowel:', isVowel('L'));
console.log('Value of isVowel:', isVowel('f'));
console.log('Value of isVowel:', isVowel('Z'));
console.log('Value of isVowel:', isVowel('a'));
console.log('Value of isVowel:', isVowel('E'));
console.log('Value of isVowel:', isVowel('I'));
console.log('Value of isVowel:', isVowel('o'));
console.log('Value of isVowel:', isVowel('u'));
