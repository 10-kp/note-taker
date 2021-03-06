// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs');
const path = require('path');

// EXPRESS CONFIGURATION
// Set up the basic properties for our express server and node to create an "express" server
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//method to specify the folder from which to serve static resources
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on Port: ${PORT}`)
});