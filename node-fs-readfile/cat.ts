import { readFile } from 'node:fs/promises';

const fileName = process.argv.slice(2);

try {
  const promises = fileName.map((path) => readFile(path, 'utf-8'));
  const contents = await Promise.all(promises);
  console.log(contents.join(), '\n', '\n');
} catch (err) {
  console.log(err);
}
