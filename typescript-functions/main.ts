function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = 60 * minutes;
  return seconds;
}

console.log('Value of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name: string): string {
  const salutation: string = 'Hey, ' + name;
  return salutation;
}

console.log('Value of greet:', greet('Beavis'));

function getArea(width: number, height: number): number {
  const area: number = width * height;
  return area;
}

console.log('Value of getArea:', getArea(17, 42));

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
  return person.firstName;
}

console.log(
  'Value of getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array: string[]): string {
  return array[array.length - 1];
}
console.log(
  'Value of getLastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
