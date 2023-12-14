import { readFile, writeFile } from 'node:fs/promises';

const [, , source, destination] = process.argv;

try {
  const data = await readFile(source, 'utf-8');
  await writeFile(destination, data, 'utf-8');
} catch (err) {
  console.log(err);
  process.exit(1);
}
