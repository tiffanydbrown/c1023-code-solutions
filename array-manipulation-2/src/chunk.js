/* exported chunk */
function chunk(array, size) {
  const chunkSize = size;
  const newArray = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk2 = array.slice(i, i + chunkSize);
    newArray.push(chunk2);
  }
  return newArray;
}
console.log(chunk(['foo', 'bar', 'baz', 'qux'], 2));
