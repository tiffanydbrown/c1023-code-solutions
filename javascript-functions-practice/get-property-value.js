/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}

console.log(
  'Value of getPropertyValue:',
  getPropertyValue({
    name: 'Lea Verou',
    occupation: 'software developer',
    birthPlace: 'Lesbos, Greece',
  })
);
