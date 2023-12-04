const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const noD = names.filter((name) => {
  if (!name.includes('d') && !name.includes('D')) {
    return name;
  }
  return false;
});
console.log(noD);
