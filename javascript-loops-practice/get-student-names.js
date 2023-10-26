/* exported getStudentNames */
function getStudentNames(students) {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  console.log(newArray);
  return newArray;
}

const students = [
  {
    name: 'Shrek',
  },
  {
    name: 'Donkey',
  },
  {
    name: 'Fiona',
  },
];
console.log('Value of getStudentNames:', getStudentNames(students));
