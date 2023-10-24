const student = {
  firstName: 'Tiffany',
  lastName: 'Brown',
  age: 45,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';
console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student', student);

const vehicle = {
  make: 'Cadillac',
  model: 'Escalade',
  year: 2005,
};
vehicle['color'] = 'White Diamond';
vehicle['isConvertible'] = false;
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Marinara',
  type: 'cat',
};

delete pet.name;
delete pet.type;
console.log('Value of pet', pet);
