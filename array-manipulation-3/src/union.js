/* exported union */
function union(first, second) {
  const newArray = [];

  for (let i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}

console.log(union([2, 1], [2, 3]));
console.log(union(['html', 'css', 'javascript'], ['php', 'css', 'sql']));
console.log(
  union(['a', 'link', 'to', 'the', 'past'], ['the', 'adventure', 'of', 'link'])
);
