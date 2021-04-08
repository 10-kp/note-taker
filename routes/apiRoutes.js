
const noteDisplay = require('../public/assets/js/index');

//Routing
module.exports = (app) => {

// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

app.get('/api/notes', (req, res) => res.json(noteDisplay));

//.sendFile function to transfer the file at the given path and sets the Content-Type response HTTP
//route to db.json file and save to json

app.post('api/notes', (req, res) => {
    //Create note list
    const newNote = req.body;
    const noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    
    // res.sendFile(path.join(__dirname,'/db/db.json'));
    noteList.push(newNote);
});

app.get("/api/notes/:id", (req,res) => {
    // display json for the notes array 
    res.json(notes[req.params.id]);
});

//POST request for a new note
app.post('api/notes', (req, res) => {
    notes.push(noteList);
});
};