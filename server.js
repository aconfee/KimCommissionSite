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

// Start server
app.listen(9000);
console.log('Server started on port 9000.');
