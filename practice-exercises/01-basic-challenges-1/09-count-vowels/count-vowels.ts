export function countVowels(str: string): number {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (const value of str) {
    if (vowels.includes(value)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
