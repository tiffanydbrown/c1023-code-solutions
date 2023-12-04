const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((element) => console.log(element));

const reversedArray = [];

values.forEach((element) => {
  reversedArray.unshift(element);
});
console.log('Reverse order:');
reversedArray.forEach((element) => console.log(element));
