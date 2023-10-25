/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('Value of getNumbersToTen:', getNumbersToTen());
console.log('Value of getNumbersToTen:', getNumbersToTen());
console.log('Value of getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber = currentNumber + 2;
  }
  return evenNumbers;
}
console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());
console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());
console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (times > count) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('Value of repeatWord:', repeatWord('groot', 5));
console.log('Value of repeatWord:', repeatWord('hello', 3));
console.log('Value of repeatWord:', repeatWord('fish', 7));

function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log('Value of logEachCharacter:', '');
console.log('Value of logEachCharacter:', 'Tiffany');
console.log('Value of logEachCharacter:', 'Today is Wednesday');

function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('Value of doubleAll:', doubleAll([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log('Value of doubleAll:', doubleAll([2, 4, 6, 8, 10])); // [4, 8, 12, 16, 20]

function getKeys(obj) {
  const keys = [];

  for (const key in obj) {
    keys.push(obj[key]);
  }
  return keys;
}
console.log(
  'Value of getKeys:',
  getKeys({ name: 'Anakin Skywalker', age: 10, occupation: 'Pod Racer' })
);
console.log(
  'Value of getKeys:',
  getKeys({ make: 'Ford', model: 'Probe', color: 'coral' })
);
console.log(
  'Value of getKeys:',
  getKeys({ fruit: 'apple', color: 'green', name: 'Granny Smith' })
);

function getValues(obj) {
  const values = [];

  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(
  'Value of getValues:',
  getKeys({ name: 'Ellen Ripley', age: 30, occupation: 'Dock Worker' })
);
console.log(
  'Value of getValues:',
  getKeys({ make: 'Buick', model: 'Enclave', color: 'white' })
);
console.log(
  'Value of getValues:',
  getKeys({ fruit: 'orange', color: 'orange', name: 'mandarin' })
);
