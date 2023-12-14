import { readFile, writeFile } from 'node:fs/promises';

// type Data = {
//   nextId: number;
//   notes: Record<string, string>;
// };

const command = process.argv[2];

switch (command) {
  case 'read':
    try {
      const contents = await readFile('data.json', 'utf-8');
      const contentObject = JSON.parse(contents);
      console.log(contentObject);
      for (const property in contentObject.notes) {
        console.log(`${property}: ${contentObject.notes[property]}`);
      }
    } catch (err) {
      console.log(err);
    }
    break;
  case 'create':
    try {
      const contents = await readFile('data.json', 'utf-8');
      const contentObject = JSON.parse(contents);
      contentObject.notes[contentObject.nextId] = process.argv[3];
      const contentString = JSON.stringify(contentObject, null, 2);
      contentObject.nextId++;
      await writeFile('data.json', contentString, 'utf-8');
    } catch (err) {
      console.log(err);
    }
    break;
  case 'update':
    // try {
    //   const contents = await readFile('data.json', 'utf-8');
    //   const contentObject = JSON.parse(contents);
    //   contentObject.notes[contentObject.nextId] = process.argv[3];
    //   const contentString = JSON.stringify(contentObject, null, 2);
    //   await writeFile('data.json', contentString, 'utf-8');
    // } catch (err) {
    //   console.log(err);
    // }
    break;
  case 'delete':
    break;
  default:
    console.log('Error: Incorrect command!');
    process.exit(1);
}
// console.log(result);
