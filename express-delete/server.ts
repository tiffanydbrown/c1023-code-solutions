import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

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

app.delete('/api/grades/:id', (req, res) => {
  const gradeId = req.params.id;

  delete grades[gradeId];
  res.sendStatus(204);
  if (!gradeId) {
    res.sendStatus(404);
  }
  return gradeId;
});
