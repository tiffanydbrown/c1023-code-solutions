/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  const result = stack.peek();
  if (!stack) {
    return undefined;
  }
  return result;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  if (!stack || !value) {
    return undefined;
  }
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  if (!stack) {
    return undefined;
  }
  return stack.pop();
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  if (!stack) {
    return true;
  }
  return false;
}
