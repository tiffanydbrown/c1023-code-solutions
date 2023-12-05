const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((element) => console.log(element));

// const reversedArray = [];

// values.forEach((element) => {
//   values.unshift(element);
// });
console.log('Reverse order:');
// values.forEach((element) => console.log(element));

values.forEach((element, index, array) => {
  console.log(array[array.length - 1 - index]);
});
