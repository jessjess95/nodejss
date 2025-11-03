"use strict";
const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World 3.0!');
});
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});