import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const operand = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
let result;

switch (operand) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num2, num1);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num2, num1);
    break;
}
console.log(result);
