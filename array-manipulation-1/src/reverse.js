/* exported reverse */
function reverse(array) {
  const newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log('Value of reverse:', reverse(['foo', 'bar', 'baz']));
console.log('Value of reverse:', reverse([1, 2, 3, 4, 5]));
console.log('Value of reverse:', reverse([false, true, false, true]));
console.log('Value of reverse:', reverse([]));
