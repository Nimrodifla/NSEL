# NSEL
Make nodejs express server & json structured database in 1 line!
```javascript

const NSEL = require('./NSEL.js');

// NSEL INIT
const [app, db] = NSEL.quick('host', 'user', 'password', 'db');

// End Points
app.get('/', (req, res)=>{
    db.shieldSetter(['users', 'user1', 'password'], '1234');
    res.send(db.toJson()); // send response
});
```

## Database
NSEL.DB.jdb is a json object, that can be saved in your mysql db with the:
```javascript
db.saveDB();
```
command.

but a quicker way to work with this db, is to write the path to the json object in an array.
replace this syntax:
```javascript
db.jdb['a']['b'] = 8;
```
with this syntax:
```javascript
db.shieldSetter(['a', 'b'], 8);
```
the shieldSetter function makes sure that undefined objects will be set to {}.
that way you can write entire imaginery pathes that doesn't exist and they will be created!