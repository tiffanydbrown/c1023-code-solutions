import { readFile } from 'node:fs/promises';

async function logFile(): Promise<void> {
  try {
    const contents = await readFile('dijkstra.txt', 'utf8');
    console.log(contents);
  } catch (err) {
    console.log('Error:', err);
  }
}
logFile();
