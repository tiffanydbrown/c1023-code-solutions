/* exported last */
function last(array) {
  return array[array.length - 1];
}
console.log('Value of last:', last(['foo', 'bar', 'baz']));
console.log('Value of last:', last([1, 2, 3, 4, 5]));
console.log('Value of last:', last([false, true, false, true]));
console.log('Value of last:', last([]));
