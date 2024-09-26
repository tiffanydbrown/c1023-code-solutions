export function titleCase(str: string): string {
  const lowString = str.toLowerCase().split(' ');

  for (let i = 0; i < lowString.length; i++) {
    lowString[i] = lowString[i][0].toUpperCase() + lowString[i].slice(1);
  }

  return lowString.join(' ');
}
