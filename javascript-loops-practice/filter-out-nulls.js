/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
console.log('Values of filterOutNulls:', filterOutNulls([7, 8, null, 9]));
