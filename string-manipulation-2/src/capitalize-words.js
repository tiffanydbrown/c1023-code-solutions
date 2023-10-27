/* exported capitalizeWords */
function capitalizeWords(string) {
  const sentenceLower = string.toLowerCase();
  const sentence = sentenceLower.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substring(1);
  }
  return sentence.join(' ');
}

console.log(capitalizeWords('aLl CoDe aLl DaY'));
