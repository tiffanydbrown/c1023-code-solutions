/* exported intersection */
function intersection(first, second) {
  const newArray = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
console.log(intersection([2, 1], [2, 3]));
console.log(intersection(['html', 'css', 'javascript'], ['php', 'css', 'sql']));
console.log(
  intersection(
    ['a', 'link', 'to', 'the', 'past'],
    ['the', 'adventure', 'of', 'link']
  )
);
