import express from 'express';

let nextId = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newPost = req.body;
  newPost.id = nextId;
  grades[nextId] = newPost;

  res.json(grades[nextId]);
  nextId++;
});
