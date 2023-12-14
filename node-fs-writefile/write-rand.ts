import { writeFile } from 'node:fs/promises';

async function logFile(): Promise<void> {
  try {
    const randomNumber = Math.random().toString();
    await writeFile('random.txt', randomNumber + '\n', 'utf-8');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
logFile();
