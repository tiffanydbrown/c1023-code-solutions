/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const initials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return initials;
}

console.log(
  'Value of getInitialsOfPerson:',
  getInitialsOfPerson({ firstName: 'Lea', lastName: 'Verou' })
);
