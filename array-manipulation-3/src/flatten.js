/* exported flatten */
function flatten(array) {
  const flatArray = [].concat(...array);
  return flatArray;
}
