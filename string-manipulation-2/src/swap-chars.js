/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newWord = string.split('');

  [newWord[firstIndex], newWord[secondIndex]] = [
    newWord[secondIndex],
    newWord[firstIndex],
  ];

  return newWord.join('');
}

console.log(swapChars(0, 1, 'lodash'));
