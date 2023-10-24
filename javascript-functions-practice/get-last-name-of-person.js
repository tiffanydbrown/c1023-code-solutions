/* exported getLastNameOfPerson */
function getLastNameOfPerson(person) {
  return person.lastName;
}

const lea = {
  firstName: 'Lea',
  lastName: 'Verou',
};
// const person = lea;

console.log('Value of getLastNameOfPerson:', getLastNameOfPerson(lea));
