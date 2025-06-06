const { log } = require('console');
const express = require('express');
const path = require('path');
const replicaApp= process.env.APP_NAME

const app = express();
const PORT = 3000;

// Serve index.html
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request Serverd by ${replicaApp}`)
});

app.listen(PORT, () => {
  console.log(`${replicaApp} is running on http://localhost:${PORT}`);
});
