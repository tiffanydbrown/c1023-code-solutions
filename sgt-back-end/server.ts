import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
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
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
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
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, 'User did not input name');
    if (!course) throw new ClientError(400, 'User did not input course');
    if (!score) throw new ClientError(400, 'User did not input score');
    if (!Number.isInteger(score) || +score < 0 || score > 100) {
      throw new ClientError(400, 'Score is not an integer between 0 and 100');
    }

    const sql = `
      insert into "grades" ("course", "name", "score")
        values($1, $2, $3)
      returning *;
    `;

    const params = [course, name, +score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0 || Number.isNaN(gradeId)) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, 'User did not input name');
    if (!course) throw new ClientError(400, 'User did not input course');
    if (!score) throw new ClientError(400, 'User did not input score');
    if (!Number.isInteger(score) || +score < 0 || score > 100) {
      throw new ClientError(400, 'Score is not an integer between 0 and 100');
    }

    const sql = `
      update "grades"
        set "course" = $1,
            "name" = $2,
            "score" = $3
        where "gradeId" = $4
      returning *;
    `;

    const params = [course, name, +score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows;
    res.json(grade);
  } catch (err) {
    next(err);
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

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
