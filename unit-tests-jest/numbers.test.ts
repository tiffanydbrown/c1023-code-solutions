import { evenNumbers, multiplyBy } from "./numbers";
import { divideBy } from './numbers';
import { toDollars } from "./numbers";

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('works with an empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  })
});

describe('toDollars', () => {
  it('returns dollar amount', () => {
    const amount = 5;
    const result = toDollars(amount);
    expect(result).toEqual('$5.00');
  });
  it('returns dollar amount', () => {
    const amount = 0.193;
    const result = toDollars(amount);
    expect(result).toEqual('$0.19');
  });
});

describe('divideBy', () => {
  it('returns a quotient', () => {
    const numbers = [5, 10, 15, 20, 25];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('returns a quotient', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('multiplies the value of each key', () => {
    const obj = {};
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier)
    expect(result).toEqual
  });
  it('multiplies the value of each key', () => {
    const obj = {};
    const multiplier = 10;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual;
  });
});
