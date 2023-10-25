/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const description =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return description;
}

const tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England',
};
console.log('Value of getDescriptionOfPerson:', getDescriptionOfPerson(tim));
