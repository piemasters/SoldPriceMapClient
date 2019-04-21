//Install express server
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// Serve only the static files form the dist directory
// noinspection Annotator
app.use(express.static(__dirname + '/dist'));

// Gzip
app.use(compression());

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
// noinspection Annotator
app.listen(process.env.PORT || 8080);
