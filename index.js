const emergencyRoutes = require('./routes/emergency/routes.js');
const simulatorRoutes = require('./routes/simulator/routes.js');

const express = require('express');

// SET UP Express
const app = express();

//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

app.use('/emergency-manager', emergencyRoutes);
app.use('/simulator', simulatorRoutes);

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});