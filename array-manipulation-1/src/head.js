/* exported head */
function head(array) {
  return array[0];
}
console.log('Value of head:', head(['foo', 'bar', 'baz']));
console.log('Value of head:', head([1, 2, 3, 4, 5]));
console.log('Value of head:', head([false, true, false, true]));
console.log('Value of head:', head([]));
