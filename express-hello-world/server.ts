import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Request Type:', req.method);
  res.send('Today is Thursday');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
