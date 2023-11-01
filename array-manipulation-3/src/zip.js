/* exported zip */
function zip(first, second) {
  const result = [];
  const minLength = Math.min(first.length, second.length);

  for (let i = 0; i < minLength; i++) {
    result.push([first[i], second[i]]);
  }
  return result;
}
console.log(zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]));
console.log(zip(['dog', 'lion', 'hawk', 'tiger'], ['cat', 'lamb', 'dove']));
console.log(zip([1, 3, 5], [2, 4, 6, 8]));
console.log(
  zip(['l', 'e', 'a', 'r', 'n', 'i'], ['n', 'g', 'f', 'u', 'z', 'e'])
);
console.log(
  zip(
    [true, false, false, true, null, false, true],
    ['Tony', undefined, undefined, 'Jeeves', 'Pepper', undefined, 'Nick']
  )
);
