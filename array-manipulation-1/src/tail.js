/* exported tail */
function tail(array) {
  const newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log('Value of tail:', tail(['foo', 'bar', 'baz']));
console.log('Value of tail:', tail([1, 2, 3, 4, 5, 6]));
console.log('Value of tail:', tail([true, false, false, true]));
console.log('Value of tail:', tail([]));
