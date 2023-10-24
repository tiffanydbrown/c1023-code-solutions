/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}

console.log(
  'Value of getFirstInitialOfPerson:',
  getFirstInitialOfPerson({ firstName: 'Lea', lastName: 'Verou' })
);
