/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerWord = word.toLowerCase();
  const capitalLetter = lowerWord.charAt(0);
  const remainingLetters = lowerWord.substring(1);
  const upperLetter = capitalLetter[0].toUpperCase();
  const newWord = upperLetter + remainingLetters;

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return newWord;
}
console.log(capitalizeWord('jaVAsCrIPt'));
