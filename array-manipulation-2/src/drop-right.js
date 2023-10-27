/* exported dropRight */
function dropRight(array, count) {
  const newArray = array.slice(0, -count);
  return newArray;
}
console.log(dropRight(['foo', 'bar', 'baz', 'qux'], 2));
console.log(dropRight([1, 2, 3, 4, 5], 1));
console.log(dropRight([false, true, false, true], 3));
console.log(dropRight([], 7));
