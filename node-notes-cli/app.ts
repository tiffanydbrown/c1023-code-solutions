import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, arg1, arg2] = process.argv;

try {
  switch (command) {
    case 'read':
      await readNote();
      break;
    case 'create':
      await createNote(arg1);
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;
    default:
      console.log('Error: Incorrect command!');
      process.exit(1);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

async function read(): Promise<Data> {
  const contents = await readFile('data.json', 'utf-8');
  return JSON.parse(contents);
}

async function create(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}

function checkNote(note: string): void {
  if (!note) {
    console.log('No note');
    process.exit(1);
  }
}

function checkId(id: string, data: Data): void {
  if (!(id in data.notes)) {
    console.log(`${id} does not exist`);
    process.exit(1);
  }
}

async function readNote(): Promise<void> {
  const data = await read();
  for (const id in data.notes) {
    console.log(`${id} - ${data.notes[id]}`);
  }
}

async function createNote(note: string): Promise<void> {
  checkNote(note);
  const data = await read();
  data.notes[data.nextId] = note;
  data.nextId++;
  await create(data);
}

async function updateNote(id: string, note: string): Promise<void> {
  checkNote(note);
  const data = await read();
  checkId(id, data);
  data.notes[id] = note;
  await create(data);
}

async function deleteNote(id: string): Promise<void> {
  const data = await read();
  checkId(id, data);
  delete data.notes[id];
  await create(data);
}
