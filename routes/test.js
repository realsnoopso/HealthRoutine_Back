import { Client } from 'pg';

const client = new Client({
  user: 'mingyeongso',
  host: 'localhost',
  database: 'template1',
  password: 'mypassword',
  port: 5432,
});

client.connect();

app.get('/api/employees', (req, res) => {
  client.query('SELECT * FROM records', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching records');
    } else {
      res.send(result.rows);
    }
  });
});
