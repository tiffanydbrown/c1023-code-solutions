/* exported initial */
function initial(array) {
  const newArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log('Value of initial:', initial(['foo', 'bar', 'baz']));
console.log('Value of initial:', initial([1, 2, 3, 4, 5, 6]));
console.log('Value of initial:', initial([true, false, false, true]));
console.log('Value of initial:', initial([]));
