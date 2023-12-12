import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const addOperand = add(Number(process.argv[4]), Number(process.argv[2]));
const minusOperand = subtract(Number(process.argv[4]), Number(process.argv[2]));
const divideOperand = divide(Number(process.argv[4]), Number(process.argv[2]));
const multiplyOperand = multiply(
  Number(process.argv[2]),
  Number(process.argv[4])
);

console.log('result:', addOperand);
console.log('result:', minusOperand);
console.log('result:', divideOperand);
console.log('result:', multiplyOperand);
