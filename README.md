# NSEL
Make nodejs express server & json structured database in 1 line!
```javascript
const NSEL = require('./NSEL.js');

// NSEL INIT
const [app, db] = NSEL.quick('host', 'user', 'password', 'db');

// End Points
app.get('/', (req, res)=>{
    db.jdb = {'data': 'base'}; // edit database
    db.saveDB(); // save it
    res.send(db.jdb); // send response
});
```

## Database
NSEL.DB.jdb is a json object, that can be saved in your mysql db with the:
```javascript
db.saveDB();
```
command.