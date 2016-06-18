// 2. Handle HTTP route GET / and POST / i.e. Home
var home = (req, res) => {
  if (req.url === '/') {
  //      show search
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Header\n');
    res.write('Search\n');
    res.end('Footer\n');
  }
  //    if url == / and POST
  //      redirect to /:username
};

// 3. Handle HTTP route GET /:username
var user = (req, res) => {
  var username = req.url.replace('/', '');
  if (username.length > 0) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Header\n');
    res.write(username + '\n');
    res.end('Footer\n');
  }
};
//    if url == /:username
//      get json from treehouse
//        on 'end'
//          show profile
//        on 'error'
//          show error
module.exports = {
  'home': home,
  'user': user
};