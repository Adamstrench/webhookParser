// server.js
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '10.5.39.248', () => {
  console.log('Listening on 10.5.39.248:3000');
});

// run with `node server.mjs`
