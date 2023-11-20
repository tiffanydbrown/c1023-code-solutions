function getRangeReport(start, end) {
  const obj = {};
  const array = [];
  let count = start - 1;
  let sum = 0;

  while (count <= end - 1) {
    count++;
    array.push(count);
  }
  obj.average = (start + end) / 2;

  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else if (array[i] % 2 === 1) {
      oddArray.push(array[i]);
    }
  }
  obj.evens = evenArray;
  obj.odd = oddArray;

  obj.range = array;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  obj.total = sum;

  return obj;
}
console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
