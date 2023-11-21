function ExampleConstructor() {}
console.log('Value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

const newExampleConstructor = new ExampleConstructor();
console.log('New Example Constructor:', newExampleConstructor);

const instanceExample = newExampleConstructor instanceof ExampleConstructor;
console.log('instanceof Example Constructor:', instanceExample);
