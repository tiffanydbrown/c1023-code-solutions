/* exported getValue */
function getValue(obj, key) {
  return obj[key];
}
const dave = { firstName: 'David', lastName: 'Thomas' };
const learningFuze = { latitude: 33.6349, longitude: 117.7405 };
const tim = { name: 'Tim', language: 'JavaScript' };

console.log('Value of getValue:', getValue(dave, 'firstName'));
console.log('Value of getValue:', getValue(dave, 'lastName'));
console.log('Value of getValue:', getValue(learningFuze, 'latitude'));
console.log('Value of getValue:', getValue(learningFuze, 'longitude'));
console.log('Value of getValue:', getValue(tim, 'age'));
console.log('Value of getValue:', getValue(tim, 'yearsExperience'));
