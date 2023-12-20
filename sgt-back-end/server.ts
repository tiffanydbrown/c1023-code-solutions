import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;

    const result = await db.query(sql);

    const grade = result.rows;

    res.json(grade);
  } catch (err) {
    next(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0 || Number.isNaN(gradeId)) {
      throw new ClientError(400, `"gradeId" must be a positive integer`);
    }

    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);

    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }

    res.json(grade);
  } catch (err) {
    next(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      insert into "grades" ("course", "name", "score")
        values($1, $2, $3)
      returning *;
    `;
    const body = req.body;
    const params = [body.course, body.name, body.score];
    const result = await db.query(sql, params);

    const grade = result.rows[0];
    const gradeId = Number(req.params.gradeId);
    if (!gradeId) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    if (!Number.isInteger(gradeId) || gradeId <= 0 || Number.isNaN(gradeId)) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    res.json(grade);
  } catch (err) {
    next(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0 || Number.isNaN(gradeId)) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      update "grades"
        set "course" = $1,
            "name" = $2,
            "score" = $3
        where "gradeId" = $4
    `;

    const body = req.body;
    const params = [body.course, body.name, body.score, body.gradeId];
    const result = await db.query(sql, params);

    const grade = result.rows;
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0 || Number.isNaN(gradeId)) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      delete
          from "grades"
          where "gradeId" = $1
      returning *;
    `;

    const params = [gradeId];
    const result = await db.query(sql, params);

    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }

    res.json(grade);
  } catch (err) {
    next(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
