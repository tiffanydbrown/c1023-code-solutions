/* exported countdown */
function countdown(num) {
  const array = [];
  for (let i = num; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
console.log('Value of countdown:', countdown(10));
