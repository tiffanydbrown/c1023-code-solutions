/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    const newArray = array.slice(array.length - count);
    return newArray;
  }
}
console.log(takeRight(['foo', 'bar', 'baz', 'qux'], 2));
