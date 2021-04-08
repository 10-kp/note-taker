const path = require('path');

// Check if this is required
const htmlData = require('../routes/htmlRoutes')

module.exports = (app) => {
//route to homepage
                //DOES THIS ORDER MATTER?
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
                
//route to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//route to read the 'db.json' file and return as JSON
app.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

};