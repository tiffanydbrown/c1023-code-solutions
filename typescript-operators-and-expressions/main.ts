const width: number = 12;
const height: number = 14;
const area: number = width * height;

console.log('Value of the area:', area);
console.log('Type of the area:', typeof area);

const bill: number = 50;
const payment: number = 199;
const change: number = payment - bill;

console.log('Value of the change:', change);
console.log('Type of change:', typeof change);

const quizzes: number = 65;
const midterm: number = 87;
const final: number = 72;
const grade: number = (quizzes + midterm + final) / 3;

console.log('Value of the grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName: string = 'Tiffany';
const lastName: string = 'Brown';
const fullName: string = firstName + ' ' + lastName;

console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const ph: number = 5;
const isAcidic: boolean = ph < 7;

console.log('Value of the isAcidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const headCount: number = 10;
const isSparta: boolean = headCount === 300;

console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';

console.log('Value of motto:', motto);
console.log('Type of motto:', typeof motto);
