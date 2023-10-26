/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else if (numbers[i] % 2 !== 0) {
      newArray.push('odd');
    }
  }
  return newArray;
}
console.log('Value of oddOrEven:', oddOrEven([100, 121, 7]));
