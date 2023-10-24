/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}

// const lea = {
//   firstName: 'Lea',
//   lastName: 'Verou',
// };
console.log(
  'Value of getFullNameOfPerson:',
  getFullNameOfPerson({ firstName: 'Lea', lastName: 'Verou' })
);
