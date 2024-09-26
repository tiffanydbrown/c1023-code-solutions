export function isPalindrome(str: string): boolean {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const palinStr = newStr.split('').reverse().join('');

  if (newStr === palinStr) {
    return true;
  }
  return false;
}
