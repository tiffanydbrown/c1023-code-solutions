/* exported take */
function take(array, count) {
  return array.slice(0, count);
}

console.log('Value of take:', take(['foo', 'bar', 'baz', 'qux'], 2));
console.log('Value of take:', take([1, 2, 3, 4, 5], 1));
console.log('Value of take:', take([false, true, false, true], 3));
console.log('Value of take:', take([], 7));
