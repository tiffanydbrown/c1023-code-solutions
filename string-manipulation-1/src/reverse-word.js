/* exported reverseWord */
function reverseWord(word) {
  let backwardWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    backwardWord += word[i];
  }
  return backwardWord;
}
console.log('Value of reverseWord:', reverseWord('foo'));
console.log('Value of reverseWord:', reverseWord('rab'));
console.log('Value of reverseWord:', reverseWord('LearningFuze'));
console.log('Value of reverseWord:', reverseWord('tpircSavaJ'));
console.log('Value of reverseWord:', reverseWord('racecar'));
