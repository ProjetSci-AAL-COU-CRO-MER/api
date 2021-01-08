const emergencyRoutes = require('./routes/emergency/routes.js');
const simulatorRoutes = require('./routes/simulator/routes.js');

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

// SET UP Express & Librairy
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

app.use('/emergency-manager-api', emergencyRoutes);
app.use('/simulator-api', simulatorRoutes);

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});