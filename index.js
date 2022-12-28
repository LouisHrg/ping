const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');

app.get('/', (req, res) => {
  const row = fs.readFileSync('data.txt', 'utf-8');
  res.json(row);
});

app.post('/add', (req, res) => {
  const { ip } = req.query;

  const data = fs.readFileSync('data.txt', 'utf-8');
  fs.writeFileSync('data.txt', ip, 'utf-8');

  res.json('ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`)
});
