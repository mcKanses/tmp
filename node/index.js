const express = require('express');

console.log('starting server...')

const app = express();

console.log(process.env);

app.get('/', (req, res, next) => {
  res.send('Hello!');
});

app.listen(3000, () => console.log('server listening on port 3000'));