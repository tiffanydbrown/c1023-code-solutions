export function isAnagram(firstString: string, secondString: string): boolean {
  const cleanString = (str: string): string =>
    str
      .replace(/[^a-zA-z]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  const sortedFirst = cleanString(firstString);
  const sortedSecond = cleanString(secondString);

  return sortedFirst === sortedSecond;
}
