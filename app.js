// Build a simple server with Node.js that will serve up a web page that will
// allow a user to query any Treehouse user's profile and display some of their
// information

// 1. Create a web server
const http = require('http');
const router = require('./router');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   router.home(req, res);
   router.user(req, res);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// 4. Functions that handle reading of files and parsing results
