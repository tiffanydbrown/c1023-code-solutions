var student = {
  firstName: 'Tiffany',
  lastName: 'Brown',
  age: 45,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'teacher';
console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
var vehicle = {
  make: 'Cadillac',
  model: 'Escalade',
  year: 2005,
};
vehicle['color'] = 'White Diamond';
vehicle['isConvertible'] = false;
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);
var pet = {
  name: 'Marinara',
  kind: 'cat',
};
delete pet.name;
delete pet.kind;
console.log('Value of pet', pet);
