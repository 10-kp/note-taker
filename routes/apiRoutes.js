const fs = require('fs');
const path = require('path');
//receive a new note to save on the request body, add it to the `db.json` file, 
const noteDisplay = require('../db/db.json');

//Routing
module.exports = (app) => {

// API GET Requests - NEED THIS?
  // Below code handles when users "visit" a page.
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")));

// Below code handles when a user submits a form and thus submits data to the server.
// When a user submits form data (a JSON object), the JSON is pushed to the appropriate JavaScript array
app.post('/api/notes', (req, res) => {
    //Create note list
    const newNote = req.body;
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(newNote);
    // res.sendFile(path.join(__dirname,'/db/db.json'));
    noteList.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteList), err => {
      if(err) throw err
    } 
  );
    res.json(newNote);
});

//For IDs and delete
// app.delete("/api/notes/:id", (req,res) => {
//     // display json for the notes array 
//     var id = req.params.id;
//     console.log(id);

//     for(var i = 0; i <noteDisplay.length; i ++){
//       console.log(noteDisplay[i]);
//     };
// });

// POST request for a new note
app.post('api/notes', (req, res) => {
    notes.push(noteList);
  });

};