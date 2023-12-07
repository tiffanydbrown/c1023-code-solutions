function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}
console.log('Value of convertMinutesToSeconds:', convertMinutesToSeconds(5));
function greet(name) {
  var salutation = 'Hey, ' + name;
  return salutation;
}
console.log('Value of greet:', greet('Beavis'));
function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('Value of getArea:', getArea(17, 42));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  'Value of getFirstName:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  'Value of getLastElement:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
