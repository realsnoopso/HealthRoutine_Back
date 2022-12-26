import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'pg';
const { Client } = pkg;
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const app = express();
const port = 3000;
app.use(cors()); // cors 사용
app.use(bodyParser.json()); // body-parser 사용

const client = new Client({
  user: 'mingyeongso',
  host: 'localhost',
  database: 'template1',
  password: 'mypassword',
  port: 5432,
});

client.connect();

app.get('/records', (req, res) => {
  const id = req.query.id;
  client.query('SELECT * FROM records', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching records');
    } else {
      res.send(result.rows);
    }
  });
});

app.post('/records', (req, res) => {
  const id = req.query.id;
  res.send(id);
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
