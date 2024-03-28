'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello! Student code is 20037361');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
