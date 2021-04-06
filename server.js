// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs');
const path = require('path');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//method to specify the folder from which to serve static resources
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// Route that sends the user first to the main Page
// app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./public/index.html')));

// Route that sends the user to the notes Page
// app.get ('/notes',(req,res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// app.post

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on Port: ${PORT}`)
});