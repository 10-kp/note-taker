const fs = require('fs');
//receive a new note to save on the request body, add it to the `db.json` file, 
const noteDisplay = require('../db/db.json');

//Routing
module.exports = (app) => {

// API GET Requests
  // Below code handles when users "visit" a page.
app.get('/api/notes', (req, res) => res.json(noteDisplay));

// Below code handles when a user submits a form and thus submits data to the server.
// When a user submits form data (a JSON object), the JSON is pushed to the appropriate JavaScript array
app.post('api/notes', (req, res) => {
    //Create note list
    const newNote = req.body;
    // uuvid identify unique info
  
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    
    // res.sendFile(path.join(__dirname,'/db/db.json'));
    noteList.push(newNote);
});

//For IDs
app.get("/api/notes/:id", (req,res) => {
    // display json for the notes array 
    noteDisplay.length =0;
});

// POST request for a new note
app.post('api/notes', (req, res) => {
    notes.push(noteList);
  });

};