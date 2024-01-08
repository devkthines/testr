// server.js

const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  res.json({
    text: 'This is some dynamic text loaded from the server!' 
  });
});

app.listen(3000);
