interface Obj {
  [index: string]: number;
}

export function charCounts(word: string): object {
  const obj: Obj = {};

  for (let i = 0; i < word.length; i++) {
    const char: string = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
