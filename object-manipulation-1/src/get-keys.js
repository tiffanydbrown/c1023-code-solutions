/* exported getKeys */
function getKeys(object) {
  const array = [];

  for (const key in object) {
    array.push(key);
  }
  console.log(array);
  return array;
}
// console.log('Value of getKeys:', getKeys(dave));
// console.log('Value of getKeys:', getKeys(learningFuze));
// console.log('Value of getKeys:', getKeys(tim));
