let result;

export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('Error: inputted the incorrect operator.');
  }
  return result;
}
