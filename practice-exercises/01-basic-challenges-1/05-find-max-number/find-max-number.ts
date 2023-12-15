export function findMaxNumber(arr: number[]): number {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      number = arr[i];
    }
  }
  return number;
}
