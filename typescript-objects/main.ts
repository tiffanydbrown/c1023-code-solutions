interface studentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: studentProps = {
  firstName: 'Tiffany',
  lastName: 'Brown',
  age: 45,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';
console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Cadillac',
  model: 'Escalade',
  year: 2005,
};

vehicle['color'] = 'White Diamond';
vehicle['isConvertible'] = false;
console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Marinara',
  kind: 'cat',
};

delete pet.name;
delete pet.kind;
console.log('Value of pet', pet);
