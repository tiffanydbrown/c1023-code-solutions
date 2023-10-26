/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log('Value of findIndex:', findIndex([9, 8, 3], 4));
