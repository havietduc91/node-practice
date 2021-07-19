const http = require('http');
require('dotenv').config();

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end(process.env.USER_ID);
  // res.end(process.env.USER_KEY);
  // res.end('Hello World 2');
  res.end(process.env.NODE_ENV);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

