const colors = ['red', 'white', 'blue'];
console.log('Value of colors[0]:', colors[0]);
console.log('Value of colors[1]:', colors[1]);
console.log('Value of colors[2]:', colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]
);

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2]);
console.log('The value of colors:', colors);

const students = ['Mike', 'Brenda', 'Tiffany', 'Martha'];
const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' in the class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the class is ' + lastStudent + '.');
console.log('Value of students:', students);
