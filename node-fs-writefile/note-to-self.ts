import { writeFile } from 'node:fs/promises';

const [, , note] = process.argv;

try {
  await writeFile('note.txt', note + '\n', 'utf-8');
} catch (err) {
  console.log(err);
  process.exit(1);
}
