// Build a simple server with Node.js that will serve up a web page that will
// allow a user to query any Treehouse user's profile and display some of their
// information

// 1. Create a web server

// 2. Handle HTTP route GET / and POST / i.e. Home
//    if url == / and GET
//      show search
//    if url == / and POST
//      redirect to /:username

// 3. Handle HTTP route GET /:username
//    if url == /:username
//      get json from treehouse
//        on 'end'
//          show profile
//        on 'error'
//          show error

// 4. Functions that handle reading of files and parsing results

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});