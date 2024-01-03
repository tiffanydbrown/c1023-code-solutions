export function findMissingNumber(arr: number[]): number | undefined {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = 0;
  const missingNumber = arr.reduce((acc, num) => acc + num, actualSum);
  return expectedSum - missingNumber;
}
