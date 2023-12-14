import { readFile, writeFile } from 'node:fs/promises';

const [, , source, destination] = process.argv;

try {
  const data = await readFile(source);
  await writeFile(destination, data);
} catch (err) {
  console.log(err);
  process.exit(1);
}
