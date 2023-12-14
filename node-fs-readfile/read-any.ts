import { readFile } from 'node:fs/promises';

const fileName = process.argv[2];

async function logFile(): Promise<void> {
  try {
    const contents = await readFile(fileName, 'utf8');
    console.log(contents);
  } catch (err) {
    console.log(err);
  }
}
logFile();
