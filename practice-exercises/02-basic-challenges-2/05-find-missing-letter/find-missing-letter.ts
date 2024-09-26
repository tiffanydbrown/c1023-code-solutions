export function findMissingLetter(arr: string[]): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (alphabet[startIndex + i] !== arr[i]) {
      return alphabet[startIndex + i];
    }
  }
  return undefined;
}
