
const NSEL = require('./NSEL.js');

// NSEL INIT
const [app, db] = NSEL.quick('host', 'user', 'password', 'db');

// End Points
app.get('/', (req, res)=>{
    db.shieldSetter(['users', 'user1', 'password'], '1234');
    res.send(db.toJson()); // send response
});