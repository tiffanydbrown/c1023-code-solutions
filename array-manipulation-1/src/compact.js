/* exported compact */
function compact(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log('Value of compact:', compact([0, 1, 2, 3, 4, 5]));
