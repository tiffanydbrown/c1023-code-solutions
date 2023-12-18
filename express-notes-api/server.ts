import express from 'express';

import { readFile, writeFile } from 'node:fs/promises';

type Content = {
  id: number;
  content: string;
};

type Note = {
  nextId: number;
  notes: Record<number, Content>;
};

// const notes: Record<number, Note> = {};
async function read(): Promise<Note> {
  const contents = await readFile('data.json', 'utf-8');
  return JSON.parse(contents);
}

async function write(data: Note): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}

const app = express();
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const data = await read();
  const notesArray: Content[] = [];
  for (const prop in data.notes) {
    notesArray.push(data.notes[prop]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const note = data.notes[id];

  if (!note) {
    res.status(404).send({ Error: 'Note does not exist' });
  } else if (id < 0) {
    res.status(400).send({ Error: 'negative integer entered' });
  } else {
    res.json(note);
  }
});

app.post('/api/notes', async (req, res) => {
  const data = await read();
  try {
    if (!req.body) {
      res.status(400).send({ Error: 'No content' });
    }
    const newPost = req.body;
    newPost.id = data.nextId;
    data.notes[data.nextId] = newPost;
    data.nextId++;

    await write(data);

    res.json(data.notes[newPost.id]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const data = await read();
  try {
    const id = Number(req.params.id);

    if (!data.notes[id]) {
      res.status(400).json({ Error: 'ID invalid' });
    }
    if (req.body && req.body.content) {
      res.status(404).json({ Error: 'Bad Request: Content is required.' });
    }

    delete data.notes[id];
    await write(data);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await read();

    // if (!data.notes[id]) {
    //   res.status(400).json({ Error: 'ID invalid' });
    // }
    // if (!req.body || !req.body.content) {
    //   res.status(404).json({ Error: 'Bad Request: Content is required.' });
    // }

    data.notes[id] = req.body;
    data.notes[id].id = id;
    await write(data);
    res.json(data.notes[id]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
