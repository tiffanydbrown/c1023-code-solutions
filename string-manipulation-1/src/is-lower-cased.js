/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log('Value of isLowerCased:', isLowerCased('LearningFuze'));
console.log('Value of isLowerCased:', isLowerCased('zip-ties'));
console.log('Value of isLowerCased:', isLowerCased('JavaScript'));
console.log('Value of isLowerCased:', isLowerCased('burgers'));
console.log('Value of isLowerCased:', isLowerCased('HTML'));
