var Profile = require('./profile');
var renderer = require('./renderer');
var querystring = require('querystring');

var home = (req, res) => {
  if (req.url === '/') {
    if (req.method.toLowerCase() ==='get') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      renderer.view('header', {}, res);
      renderer.view('search', {}, res);
      renderer.view('footer', {}, res);
      res.end();
    } else {
      req.on('data', function(postBody) {
        var query = querystring.parse(postBody.toString());
        res.statusCode = 303;
        res.setHeader('Location', '/' + query.username);
        res.end();
      });
    }
  }
};

// 3. Handle HTTP route GET /:username
var user = (req, res) => {
  var username = req.url.replace('/', '');
  if (username.length > 0) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    renderer.view('header', {}, res);
    // res.end();

    var studentProfile = new Profile(username);

    studentProfile.on('end', function(profileJSON) {
      // show profile
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      renderer.view('profile', values, res);
      renderer.view('footer', {}, res);
      res.end();
    });

    studentProfile.on('error', function(error) {
      //show error
      renderer.view('error', {errorMessage: error.message}, res);
      renderer.view('search', {}, res);
      renderer.view('footer', {}, res);
      res.end();
    });
    
  }
};

module.exports = {
  'home': home,
  'user': user
};