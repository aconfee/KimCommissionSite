const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var apiRoutes = require('./api/routes/index');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use("/api", apiRoutes);
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3000;

// Start server
app.listen(port);
console.log('Server started on port ' + port '.');
