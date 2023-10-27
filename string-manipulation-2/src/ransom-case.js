/* exported ransomCase */
function ransomCase(string) {
  const toLower = string.slice(1).toLowerCase().split('');
  const firstLetter = string[0].toLowerCase();

  for (let i = 0; i < toLower.length; i += 2) {
    toLower[i] = toLower[i].toUpperCase();
  }
  // toLower.join('');
  const newWord = firstLetter + toLower.join('');
  return newWord;
}
console.log(ransomCase('foo'));
console.log(ransomCase('QUUX'));
console.log(ransomCase('WaldO'));
console.log(ransomCase('JavaScript'));
console.log(ransomCase('LearningFuze'));
