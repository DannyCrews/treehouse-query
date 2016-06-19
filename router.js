var Profile = require('./profile');

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

    var studentProfile = new Profile(username);

    studentProfile.on('end', function(profileJSON) {
      // show profile
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      res.write(values.username + ' has ' + values.badges +' badeges\n');
      res.end('Footer\n');
    });

    studentProfile.on('error', function(error) {
      //show error
      res.end('Footer\n');

    });
    
  }
};

module.exports = {
  'home': home,
  'user': user
};