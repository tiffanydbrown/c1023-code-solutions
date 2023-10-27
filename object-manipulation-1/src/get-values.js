/* exported getValues */
function getValues(object) {
  const newArray = [];

  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
// const dave = {
//   firstName: 'David',
//   lastName: 'Thomas',
// };

// const learningfuze = {
//   latitude: 33.6349,
//   attitude: 'sanguine',
//   longitude: 117.7405,
// };

// const tim = {};

// console.log('Value of getValues:', getValues(dave));
// console.log('Value of getValues:', getValues(learningFuze));
// console.log('Value of getValues:', getValues(tim));
