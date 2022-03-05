
const NSEL = require('./NSEL.js');

// NSEL INIT
const [app, db] = NSEL.quick('host', 'user', 'password', 'db');

// End Points
app.get('/', (req, res)=>{
    db.jdb = {'data': 'base'}; // edit database
    db.saveDB(); // save it
    res.send(db.jdb); // send response
});