/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log('Value of isUpperCased:', isUpperCased('LearningFuze'));
console.log('Value of isUpperCased:', isUpperCased('JavaScript'));
console.log('Value of isUpperCased:', isUpperCased('HTML'));
console.log('Value of isUpperCased:', isUpperCased('css'));
console.log('Value of isUpperCased:', isUpperCased('PHP'));
