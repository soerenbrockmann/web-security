const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const https = require('https');

const app = express();

const key = fs.readFileSync('./private_key.pem');
const cert = fs.readFileSync('./public_key.pem');
const server = https.createServer({ key: key, cert: cert }, app);

app.use(helmet.hsts());

app.get('/', (req, res) => {
  res.send('This is a secured communication!');
});

server.listen(3001, () => {
  console.log('Listening on port 3001');
});
