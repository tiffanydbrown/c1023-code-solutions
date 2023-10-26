/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  obj[key] = value;

  return obj;
}

console.log('Value of toObject:', toObject(['firstName', 'David']));
console.log('Value of toObject:', toObject(['isCool', true]));
console.log('Value of toObject:', toObject(['employer', 'LearningFuze']));
