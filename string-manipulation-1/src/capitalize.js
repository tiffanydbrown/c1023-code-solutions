/* exported capitalize */
function capitalize(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1).toLowerCase();
  const newWord = firstLetter + remainingLetters;
  return newWord;
}
console.log('Value of capitalize:', capitalize('a'));
console.log('Value of capitalize:', capitalize('link'));
console.log('Value of capitalize:', capitalize('tO'));
console.log('Value of capitalize:', capitalize('ThE'));
console.log('Value of capitalize:', capitalize('pAsT'));
