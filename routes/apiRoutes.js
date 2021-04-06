const fs = require('fs');
const noteDisplay = require('../Develop/public/assets/js/index');

//Routing
module.exports = (app) => {

//Create note list

let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

//.sendFile function to transfer the file at the given path and sets the Content-Type response HTTP
//route to db.json file and save to json
app.post('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'/db/db.json'));
});


//POST request for a new note
app.post('api/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
});