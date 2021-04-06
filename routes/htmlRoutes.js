const path = require('path');

module.exports = (app) => {
//route to homepage
                //DOES THIS ORDER MATTER?
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
                
//route to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

};