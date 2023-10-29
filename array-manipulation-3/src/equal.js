/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }
}
console.log(equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz']));
console.log(equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'qux']));
console.log(equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(equal([1, 2, 3, 4, 5], [1, 2, 3, 3, 5]));
console.log(equal([false, true, false, true], [false, true, false, true]));
console.log(equal([false, true, false, true], [true, false, true, false]));
console.log(equal([], []));
